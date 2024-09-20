import express from "express";
import { userPrisma, gamePrisma } from "../utils/prisma/index.js";
import { ConflictError } from "../errors/ConflictError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { BadRequestError } from "../errors/BadRequestError.js";

const router = express.Router();

// 팀 목록 조회 API
router.get("/team/:teamId", async (req, res, next) => {
  try {
    const { teamId } = req.params;

    const team = await userPrisma.teams.findFirst({
      select: {
        userPlayerId1: true,
        userPlayerId2: true,
        userPlayerId3: true,
      },
      where: {
        teamId: +teamId,
      },
    });

    if (!team) throw new NotFoundError("해당 팀이 존재하지 않습니다.");

    // userPlyaerId에서 playerId 찾기
    const playerIds = [];
    for (const userPlayerId in team) {
      if (team[userPlayerId]) {
        const playerId = await userPrisma.userPlayers.findFirst({
          select: { playerId: true },
          where: { userPlayerId: team[userPlayerId] },
        });
        playerIds.push(playerId.playerId);
      }
    }

    // 구한 playerId를 이용해 player 구하기
    const resultMessage = [];
    for (const playerId of playerIds) {
      const player = await gamePrisma.players.findFirst({
        select: {
          playerId: true,
          name: true,
          position: true,
          speed: true,
          decision: true,
          power: true,
          defense: true,
          stamina: true,
          tierId: true,
        },
        where: { playerId: playerId },
      });

      if (!player) throw new NotFoundError("선수정보가 존재하지 않습니다.");

      resultMessage.push(player);
    }

    return res.status(200).json({ Team: resultMessage });
  } catch (err) {
    next(err);
  }
});

// 음 어떻게든 일단 구현을 했습니다만 코드가 많이 난잡하네요 일단 구현하고 시간될떄마다 리펙토링할 수 있으면 하겠습니다.
// 시간되실때 한번 보시고 혹시 좋은 방법있으면 알려주시면 감사하겠습니다.
// 선수 선발 등록 API 토큰없이 테스트 실제는 /team/:teamId로 실행하기
router.post("/team/:teamId/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { teamId } = req.params;
    const { userPlayerId, teamPlayerNumber } = req.body;
    // userPlayerId는 유저가 가지고 있는 선수 등록할 userPlayerId를 요청받습니다.
    // teamPlayerNumber는 team컬럼 중 userPlayerId1, userPlayerId2, userPlayerId3 등 어느 위치(실제 축구라면 포지션)에 등록할 것인지를 요청받습니다.

    const userPlayer = await userPrisma.userPlayers.findFirst({
      where: {
        userPlayerId: userPlayerId,
      },
    });
    if (!userPlayer)
      throw new NotFoundError("현재 소유하고 있는 선수가 아닙니다.");
    if (+userId !== userPlayer.userId)
      throw new ConflictError("현재 계정의 선수가 아닙니다.");

    const player = await gamePrisma.players.findFirst({
      where: { playerId: userPlayer.playerId },
    });
    if (!player) throw new NotFoundError("해당 선수 정보가 없습니다.");

    let team = await userPrisma.teams.findFirst({
      where: {
        teamId: +teamId,
      },
    });
    if (team && +userId !== team.userId)
      throw new ConflictError("현재 계정의 팀이 아닙니다.");

    // 해당 userPlayerId 선수가 이미 팀에 존재하고 선발 위치만을 변경해 주기위한 코드들입니다. 그리고 선발할 위치에 다른 선수가 있으면 다른 선수의 userPlayerId를 서로 위치를 변경하기 위해 작성해 보았습니다.
    let originUserPlayerNumber = null; // 선발할려던 userPlayerid가 이미 존재하여 그 해당 위치를 알기위해 사용합니다. 그래야 선발할 위치에 있던 다른 선수의 userPlayerId를 넣어주기 위해서 입니다.
    let originUserPlayerId = null; // 선발할 위치에 있던 다른 선수의 userPlayerId를 가집니다.
    // 선발할려는 userPlayerId가 이미 팀에 있으면
    if (
      (team && userPlayerId === team.userPlayerId1) ||
      (team && userPlayerId === team.userPlayerId2) ||
      (team && userPlayerId === team.userPlayerId3)
    ) {
      // 이미 존재어딘가에 존재하는 userPlayerId의 위치를 찾아서 지정합니다.
      if (userPlayerId === team.userPlayerId1) originUserPlayerNumber = 1;
      if (userPlayerId === team.userPlayerId2) originUserPlayerNumber = 2;
      if (userPlayerId === team.userPlayerId3) originUserPlayerNumber = 3;

      console.log("userPlayer원래 있던 위치 : " + originUserPlayerNumber);

      // 해당 선발할려는 위치에 이미 다른 선수가 존재하면 그 다른 선수의 userPlayerId를 가져옵니다.
      if (team.userPlayerId1 && teamPlayerNumber === 1)
        originUserPlayerId = team.userPlayerId1;
      if (team.userPlayerId2 && teamPlayerNumber === 2)
        originUserPlayerId = team.userPlayerId2;
      if (team.userPlayerId3 && teamPlayerNumber === 3)
        originUserPlayerId = team.userPlayerId3;

      console.log(
        "선발할려는 위치에 있는 다른 선수 userPlayerId : " + originUserPlayerId,
      );

      // 다른 선수의 위치를 원래 선발할려는 선수의 위치로 변경해 줍니다.
      if (originUserPlayerNumber === 1) {
        await userPrisma.teams.update({
          data: {
            userPlayerId1: originUserPlayerId,
          },
          where: { teamId: +teamId },
        });
      } else if (originUserPlayerNumber === 2) {
        await userPrisma.teams.update({
          data: {
            userPlayerId2: originUserPlayerId,
          },
          where: { teamId: +teamId },
        });
      } else if (originUserPlayerNumber === 3) {
        await userPrisma.teams.update({
          data: {
            userPlayerId3: originUserPlayerId,
          },
          where: { teamId: +teamId },
        });
      }
    }

    // 해당 팀이 있으면 해당 자리에 유저 선발 등록
    if (team) {
      if (teamPlayerNumber === 1) {
        await userPrisma.teams.update({
          data: {
            userPlayerId1: userPlayerId,
          },
          where: { teamId: +teamId },
        });
      } else if (teamPlayerNumber === 2) {
        await userPrisma.teams.update({
          data: {
            userPlayerId2: userPlayerId,
          },
          where: { teamId: +teamId },
        });
      } else if (teamPlayerNumber === 3) {
        await userPrisma.teams.update({
          data: {
            userPlayerId3: userPlayerId,
          },
          where: { teamId: +teamId },
        });
      } else {
        throw new BadRequestError("해당 한 팀의 엔트리는 1,2,3번만 있습니다.");
      }
    } else {
      // 한 계정 당 3개의 팀만을 가집니다.
      const isTeamCountCheck = await userPrisma.teams.findMany({
        where: {
          userId: +userId,
        },
      });
      if (Object.keys(isTeamCountCheck).length >= 3)
        return res.status(400).json({
          message: "이미 3개의 팀을 가지고 있습니다.",
          yourTeamId1: isTeamCountCheck[0].teamId,
          yourTeamId2: isTeamCountCheck[1].teamId,
          yourTeamId3: isTeamCountCheck[2].teamId,
        });

      // 팀이 없으면 새로 팀을 생성하고 선발할 선수를 해당 자리에 등록합니다.
      if (teamPlayerNumber === 1) {
        team = await userPrisma.teams.create({
          data: {
            userId: +userId,
            userPlayerId1: userPlayerId,
          },
        });
      } else if (teamPlayerNumber === 2) {
        team = await userPrisma.teams.create({
          data: {
            userId: +userId,
            userPlayerId2: userPlayerId,
          },
        });
      } else if (teamPlayerNumber === 3) {
        team = await userPrisma.teams.create({
          data: {
            userId: +userId,
            userPlayerId3: userPlayerId,
          },
        });
      } else {
        throw new BadRequestError("해당 한 팀의 엔트리는 1,2,3번만 있습니다.");
      }
    }

    return res.status(201).json({
      message: `${player.name} 선수를 teamid : ${team.teamId}번 팀에 등록했습니다.`,
    });
  } catch (err) {
    next(err);
  }
});

// 선수 후보 등록 API
// 선수 한명한명씩 후보로 보내고 null로 만들고 모든 팀의 userPlayerId가 null일때
router.delete("/team/:teamId", async (req, res, next) => {
  const { userId } = req.params;
  const { teamId } = req.params;
  const { userPlayerId, teamPlayerNumber } = req.body;

  return res.status(200).json({ message: "후보로 등록되었습니다." });
});

export default router;
