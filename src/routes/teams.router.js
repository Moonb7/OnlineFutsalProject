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

      resultMessage.push(player);
    }

    return res.status(200).json({ Team: resultMessage });
  } catch (err) {
    next(err);
  }
});

// 선수 선발 등록 API 토큰없이 테스트 실제는 /team/:teamId로 실행하기
router.post("/team/:teamId/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { teamId } = req.params;
    const { userPlayerId, teamPlayerNumber } = req.body;

    const userPlayer = await userPrisma.userPlayers.findFirst({
      where: {
        userPlayerId: userPlayerId,
      },
    });
    if (!userPlayer)
      throw new NotFoundError("현재 소유한 선수가 존재하지 않습니다.");
    if (+userId !== userPlayer.userId)
      throw new ConflictError("현재 계정의 선수가 아닙니다.");

    const player = await gamePrisma.players.findFirst({
      where: { playerId: userPlayer.playerId },
    });
    if (!player) throw new NotFoundError("해당 선수 정보가 없습니다.");

    const isTeam = await userPrisma.teams.findFirst({
      where: {
        teamId: +teamId,
      },
    });

    if (userPlayerId === isTeam.userPlayerId1)
      throw new ConflictError("이미 선수가 출전중입니다.");
    if (userPlayerId === isTeam.userPlayerId2)
      throw new ConflictError("이미 선수가 출전중입니다.");
    if (userPlayerId === isTeam.userPlayerId3)
      throw new ConflictError("이미 선수가 출전중입니다.");

    if (isTeam) {
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
      // 팀 3개
      await userPrisma.teams.create({
        data: {
          teamId: +teamId,
          userId: +userId,
          userPlayerId1: userPlayerId,
        },
      });
    }

    return res.status(201).json({ message: "해당 선수를 팀에 등록했습니다." });
  } catch (err) {
    next(err);
  }
});

// 선수 후보 등록 API
//
router.delete("/team/:teamId", async (req, res, next) => {
  const userId = req.user.userId;
  const { teamId } = req.params;

  return res.status(200).json({ message: "후보로 등록되었습니다." });
});

export default router;
