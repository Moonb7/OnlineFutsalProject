import express from "express";
import { BadRequestError } from "../errors/BadRequestError.js";
import { ForbiddenError } from "../errors/ForbiddenError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import {
  getMatchResult,
  getTeamScore,
  MATCH_RESULT,
} from "../utils/game/game.js";
import {
  teamIdBodyValidate,
  teamIdParamValidate,
} from "../utils/joi/teams.validation.js";
import { createMatchLogToDB } from "../utils/prisma/mathLogs.prisma.js";
import { findPlayerFromDB } from "../utils/prisma/players.prisma.js";
import { findTeamFromDB } from "../utils/prisma/teams.prisma.js";
import { updateUserRatingToDB } from "../utils/prisma/users.prisma.js";

const router = express.Router();

/**  상대팀 지정 플레이 API **/
// TODO : req 데이터로 userId, myTeam, enemyTeam 세팅
// TODO : 승패에 따른 유저의 Rating 점수 반영
// TODO : 선수의 강화(UserPlayer.upgrade) 수치에 따라 능력치를 강화
// TODO : 유저 검사(처음, )를 할지 말지 고민 중
// TODO : 무승부 처리를 어떻게 할까 (일정 범위?)
router.patch("/events/matching/:teamId", async (req, res, next) => {
  try {
    const userId = 1; // req.header.authorization
    const { myTeamId } = await teamIdParamValidate(req.params);
    const { enemyTeamId } = await teamIdBodyValidate(req.body);

    const myTeam = await findTeamFromDB(myTeamId);
    const enemyTeam = await findTeamFromDB(enemyTeamId);

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
        "내 팀의 인원 수가 3명 미만이기 때문에 게임을 진행하실 수 없습니다.",
      );

    const myTeamArr = [];
    const enemyTeamArr = [];

    for (let i = 1; i < 4; i++) {
      const myPlayerId = myTeam[`UserPlayer` + i].playerId;
      const myPlayer = await findPlayerFromDB(myPlayerId);

      // 본인 플레이어 정보가 존재하지 않을 경우
      if (!myPlayer)
        throw new NotFoundError(
          `내 팀 선수 중 '${myPlayerId}'의 선수 데이터가 존재하지 않습니다.`,
        );

      myTeamArr.push(myPlayer);

      const enemyPlayerId = enemyTeam[`UserPlayer` + i].playerId;
      const enemyPlayer = await findPlayerFromDB(enemyPlayerId);

      // 상대 플레이어 정보가 존재하지 않을 경우
      if (!myPlayer)
        throw new NotFoundError(
          `상대 팀 선수 중 '${enemyPlayerId}'의 선수 데이터가 존재하지 않습니다.`,
        );

      enemyTeamArr.push(enemyPlayer);
    }

    const myTeamScore = getTeamScore(myTeamArr);
    const enemyTeamScore = getTeamScore(enemyTeamArr);

    const matchResult = getMatchResult(myTeamScore, enemyTeamScore);

    // 경기 결과에 대해 레이팅 점수를 반영한다.
    // 승(+10 Point), 패(-10 Point)
    // 먼저 본인 유저부터
    // 다음 상대팀 유저
    let myUser;
    let enemyUser;
    switch (matchResult.result) {
      case MATCH_RESULT.WIN:
        {
          myUser = await updateUserRatingToDB(myTeam.userId, +10);
          enemyUser = await updateUserRatingToDB(enemyTeam.userId, -10);
        }
        break;
      case MATCH_RESULT.LOSE:
        {
          myUser = await updateUserRatingToDB(myTeam.userId, -10);
          enemyUser = await updateUserRatingToDB(enemyTeam.userId, 10);
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

    return res
      .status(200)
      .json({ rating: myUser.rating, message: { matchResult } });
  } catch (error) {
    next(error);
  }
});

export default router;
