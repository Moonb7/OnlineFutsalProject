import express from "express";
import { BadRequestError } from "../errors/BadRequestError.js";
import { ForbiddenError } from "../errors/ForbiddenError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import {
  teamIdBodyValidate,
  teamIdParamValidate,
} from "../utils/joi/teams.validation.js";
import {
  getBonusRatingScore,
  getMatchResult,
  getTeamScore,
  MATCH_RESULT,
} from "../utils/logic/game.js";
import { createMatchLogToDB } from "../utils/prisma/mathLogs.prisma.js";
import { findPlayerFromDB } from "../utils/prisma/players.prisma.js";
import {
  findTeamFromDB,
  findTeamsAutoMatchMakingFromDB,
} from "../utils/prisma/teams.prisma.js";
import {
  findUserFromDB,
  updateUserRatingToDB,
} from "../utils/prisma/users.prisma.js";

const router = express.Router();

/**  상대팀 지정 플레이 API **/
// TODO : 유저 검사(처음, )를 할지 말지 고민 중
router.patch("/events/matching/:teamId", async (req, res, next) => {
  try {
    const userId = 1; // req.header.authorization
    const { teamId: myTeamId } = await teamIdParamValidate(req.params);
    const { enemyTeamId } = await teamIdBodyValidate(req.body);

    const myTeam = await findTeamFromDB(myTeamId);
    const enemyTeam = await findTeamFromDB(enemyTeamId);

    // 내팀이 DB에 없는 경우
    if (!myTeam)
      throw new NotFoundError(
        `(${myTeamId}) 내 팀의 데이터가 존재하지 않습니다.`,
      );

    // 상대팀이 DB에 없는 경우
    if (!enemyTeam)
      throw new NotFoundError(
        `(${enemyTeam}) 상대팀의 데이터가 존재하지 않습니다.`,
      );

    // 내팀이 내 계정의 팀이 아닐 경우
    if (myTeam.userId !== userId)
      throw new ForbiddenError("내 팀이 아니므로 게임을 진행하실 수 없습니다.");

    // 내팀과 상대팀의 소유자가 나일 경우
    if (myTeam.userId === enemyTeam.userId)
      throw new BadRequestError("내 팀끼리는 게임을 진행하실 수 없습니다.");

    // 본인 팀원 수가 3명 미만일 경우
    if (!myTeam.UserPlayer1 || !myTeam.UserPlayer2 || !myTeam.UserPlayer3)
      throw new BadRequestError(
        "내 팀의 인원 수가 3명 미만이기 때문에 게임을 진행하실 수 없습니다.",
      );

    // 상대 팀원 수가 3명 미만일 경우
    if (
      !enemyTeam.UserPlayer1 ||
      !enemyTeam.UserPlayer2 ||
      !enemyTeam.UserPlayer3
    )
      throw new BadRequestError(
        "상대 팀의 인원 수가 3명 미만이기 때문에 게임을 진행하실 수 없습니다.",
      );

    const myTeamArr = [];
    const enemyTeamArr = [];

    for (let i = 1; i < 4; i++) {
      const myPlayerId = myTeam[`UserPlayer` + i].playerId;
      const myPlayer = await findPlayerFromDB(myPlayerId);
      const myPlayerUpgrade = myTeam[`UserPlayer` + i].upgrade;

      // 본인 플레이어 정보가 존재하지 않을 경우
      if (!myPlayer)
        throw new NotFoundError(
          `내 팀 선수 중 (${myPlayerId}) 의 선수 데이터가 존재하지 않습니다.`,
        );

      myTeamArr.push({ player: myPlayer, upgrade: myPlayerUpgrade });

      const enemyPlayerId = enemyTeam[`UserPlayer` + i].playerId;
      const enemyPlayer = await findPlayerFromDB(enemyPlayerId);
      const enemyPlayerUpgrade = enemyTeam[`UserPlayer` + i].upgrade;

      // 상대 플레이어 정보가 존재하지 않을 경우
      if (!myPlayer)
        throw new NotFoundError(
          `상대 팀 선수 중 (${enemyPlayerId}) 의 선수 데이터가 존재하지 않습니다.`,
        );

      enemyTeamArr.push({ player: enemyPlayer, upgrade: enemyPlayerUpgrade });
    }

    const myTeamScore = getTeamScore(myTeamArr);
    const enemyTeamScore = getTeamScore(enemyTeamArr);

    const matchResult = getMatchResult(myTeamScore, enemyTeamScore);

    // 경기 결과에 대해 Rating 점수를 자신과 상대팀의 유저에게 반영한다.
    // Rating 점수는 기본 10점이다.
    // 불리한 조건(내 팀의 총 점수가 상대팀의 총 점수보다 낮을 때)
    //    - 승리할 경우 : 기본 10점보다 더 준다.
    //    - 패배할 경우 :
    // 반면에, 유리한 조건일 경우 => 10점보다 덜 준다.
    let changeRatingScore = getBonusRatingScore(
      myTeamScore,
      enemyTeamScore,
      matchResult.result,
    );
    let myUser = null;
    let enemyUser = null;
    let message = "";

    switch (matchResult.result) {
      case MATCH_RESULT.WIN:
        {
          myUser = await updateUserRatingToDB(myTeam.userId, changeRatingScore);
          enemyUser = await updateUserRatingToDB(
            enemyTeam.userId,
            -changeRatingScore,
          );
          message = `[${matchResult.score}] 로 승리하셨습니다!!! Rating이 ${changeRatingScore} 증가했습니다.`;
        }
        break;
      case MATCH_RESULT.DRAW:
        {
          myUser = await findUserFromDB(myTeam.userId);
          message = `[${matchResult.score}] 로 비겼습니다!!!`;
        }
        break;
      case MATCH_RESULT.LOSE:
        {
          myUser = await updateUserRatingToDB(
            myTeam.userId,
            -changeRatingScore,
          );
          enemyUser = await updateUserRatingToDB(
            enemyTeam.userId,
            changeRatingScore,
          );
          message = `[${matchResult.score}] 로 패배하셨습니다... Rating이 ${changeRatingScore} 감소했습니다.`;
        }
        break;
    }

    // 경기 결과를 매치로그에 저장한다.
    // - 우선 내 팀 기준의 MatchLog 만 저장하도록 한다.
    const matchLog = await createMatchLogToDB(
      myTeam.userId,
      enemyTeam.userId,
      matchResult.result,
    );

    return res.status(200).json({ message, rating: myUser.rating });
  } catch (error) {
    next(error);
  }
});

/**  자동 매치메이킹 후 게임 플레이 API **/
// TODO : 유저 검사(처음, )를 할지 말지 고민 중
router.patch("/events/autoMatching/:teamId", async (req, res, next) => {
  try {
    const userId = 1; // req.header.authorization
    const { teamId: myTeamId } = await teamIdParamValidate(req.params);

    const user = await findUserFromDB(userId);
    const enemyTeams = await findTeamsAutoMatchMakingFromDB(
      userId,
      user.rating,
    );

    const myTeam = await findTeamFromDB(myTeamId);
    const enemyTeam = enemyTeams[Math.floor(Math.random() * enemyTeams.length)];

    // 내팀이 DB에 없는 경우
    if (!myTeam)
      throw new NotFoundError(`${myTeamId} 팀의 데이터가 존재하지 않습니다.`);

    // 내팀이 내 계정의 팀이 아닐 경우
    if (myTeam.userId !== userId)
      throw new ForbiddenError("내 팀이 아니므로 게임을 진행하실 수 없습니다.");

    // 본인 팀원 수가 3명 미만일 경우
    if (!myTeam.UserPlayer1 || !myTeam.UserPlayer2 || !myTeam.UserPlayer3)
      throw new BadRequestError(
        "내 팀의 인원 수가 3명 미만이기 때문에 게임을 진행하실 수 없습니다.",
      );

    const myTeamArr = [];
    const enemyTeamArr = [];

    for (let i = 1; i < 4; i++) {
      const myPlayerId = myTeam[`UserPlayer` + i].playerId;
      const myPlayer = await findPlayerFromDB(myPlayerId);
      const myPlayerUpgrade = myTeam[`UserPlayer` + i].upgrade;

      // 본인 플레이어 정보가 존재하지 않을 경우
      if (!myPlayer)
        throw new NotFoundError(
          `내 팀 선수 중 (${myPlayerId}) 의 선수 데이터가 존재하지 않습니다.`,
        );

      myTeamArr.push({ player: myPlayer, upgrade: myPlayerUpgrade });

      const enemyPlayerId = enemyTeam[`playerId` + i];
      const enemyPlayer = await findPlayerFromDB(enemyPlayerId);
      const enemyPlayerUpgrade = enemyTeam[`upgrade` + i];

      // 상대 플레이어 정보가 존재하지 않을 경우
      if (!myPlayer)
        throw new NotFoundError(
          `상대 팀 선수 중 (${enemyPlayerId}) 의 선수 데이터가 존재하지 않습니다.`,
        );

      enemyTeamArr.push({ player: enemyPlayer, upgrade: enemyPlayerUpgrade });
    }

    const myTeamScore = getTeamScore(myTeamArr);
    const enemyTeamScore = getTeamScore(enemyTeamArr);

    const matchResult = getMatchResult(myTeamScore, enemyTeamScore);

    // 경기 결과에 대해 Rating 점수를 자신과 상대팀의 유저에게 반영한다.
    // Rating 점수는 기본 10점이다.
    // 불리한 조건(내 팀의 총 점수가 상대팀의 총 점수보다 낮을 때)
    //    - 승리할 경우 : 기본 10점보다 더 준다.
    //    - 패배할 경우 :
    // 반면에, 유리한 조건일 경우 => 10점보다 덜 준다.
    let changeRatingScore = getBonusRatingScore(
      myTeamScore,
      enemyTeamScore,
      matchResult.result,
    );

    let myUser = null;
    let enemyUser = null;
    let message = "";

    switch (matchResult.result) {
      case MATCH_RESULT.WIN:
        {
          myUser = await updateUserRatingToDB(myTeam.userId, changeRatingScore);
          enemyUser = await updateUserRatingToDB(
            enemyTeam.userId,
            -changeRatingScore,
          );
          message = `[${matchResult.score}] 로 승리하셨습니다!!! Rating이 ${changeRatingScore} 증가했습니다.`;
        }
        break;
      case MATCH_RESULT.DRAW:
        {
          myUser = await findUserFromDB(myTeam.userId);
          message = `[${matchResult.score}] 로 비겼습니다!!!`;
        }
        break;
      case MATCH_RESULT.LOSE:
        {
          myUser = await updateUserRatingToDB(
            myTeam.userId,
            -changeRatingScore,
          );
          enemyUser = await updateUserRatingToDB(
            enemyTeam.userId,
            changeRatingScore,
          );
          message = `[${matchResult.score}] 로 패배하셨습니다... Rating이 ${changeRatingScore} 감소했습니다.`;
        }
        break;
    }

    // 경기 결과를 매치로그에 저장한다.
    // - 우선 내 팀 기준의 MatchLog 만 저장하도록 한다.
    const matchLog = await createMatchLogToDB(
      myTeam.userId,
      enemyTeam.userId,
      matchResult.result,
    );

    return res.status(200).json({ message, rating: myUser.rating });
  } catch (error) {
    next(error);
  }
});

export default router;
