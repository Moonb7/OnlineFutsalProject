import express from "express";
import { BadRequestError } from "../errors/BadRequestError.js";
import { ConflictError } from "../errors/ConflictError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  positionBodyValidate,
  teamIdParamValidate,
  teamInfoBodyValidate,
} from "../utils/joi/teams.validation.js";
import { gamePrisma, userPrisma } from "../utils/prisma/index.js";

const router = express.Router();

// 팀 선수 목록 조회 API
router.get("/team/:teamId", async (req, res, next) => {
  try {
    const { teamId } = await teamIdParamValidate(req.params);

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
      } else {
        playerIds.push(null);
      }
    }

    // 구한 playerId를 이용해 player 구하기
    const resultMessage = [];
    let slot = 1;
    for (const playerId of playerIds) {
      if (playerId) {
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

        const data = { slot };
        for (const key in player) {
          data[key] = player[key];
        }

        resultMessage.push(data);
      }

      slot += 1;
    }

    // // 선수들이 전부 존재하지 않을때 이거는 수정
    // if (!resultMessage)
    //   throw new NotFoundError("해당 선수들이 존재하지 않습니다.");

    return res.status(200).json({ Team: resultMessage });
  } catch (err) {
    next(err);
  }
});

// 팀 목록 조회 API 유저 가지고 있는 팀 Id를 알려줍니다.
router.get("/team", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const isTeamsCountCheck = await userPrisma.teams.findMany({
      where: {
        userId: +userId,
      },
    });

    return res.status(200).json({
      yourTeamId1: isTeamsCountCheck[0]
        ? isTeamsCountCheck[0].teamId
        : "비어있음",
      yourTeamId2: isTeamsCountCheck[1]
        ? isTeamsCountCheck[1].teamId
        : "비어있음",
      yourTeamId3: isTeamsCountCheck[2]
        ? isTeamsCountCheck[2].teamId
        : "비어있음",
    });
  } catch (err) {
    next(err);
  }
});

// 팀 생성 (토큰이 있어야 되고)
router.post("/team", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.userId;

    // 한 계정 당 3개의 팀만을 가집니다. 3팀이 넘어가면 에러를 처리합니다.
    let isTeamsCountCheck = await userPrisma.teams.findMany({
      where: {
        userId: +userId,
      },
    });
    if (Object.keys(isTeamsCountCheck).length >= 3)
      return res.status(400).json({
        message: "이미 3개의 팀을 가지고 있습니다.",
        yourTeamId1: isTeamsCountCheck[0].teamId,
        yourTeamId2: isTeamsCountCheck[1].teamId,
        yourTeamId3: isTeamsCountCheck[2].teamId,
      });

    // 팀 생성
    const team = await userPrisma.teams.create({
      data: {
        userId: userId,
      },
    });

    // 다시 조회
    isTeamsCountCheck = await userPrisma.teams.findMany({
      where: {
        userId: +userId,
      },
    });

    return res.status(201).json({
      message: `${team.teamId}팀이 새로 등록되었습니다.`,
      yourTeamId1: isTeamsCountCheck[0]
        ? isTeamsCountCheck[0].teamId
        : "비어있음",
      yourTeamId2: isTeamsCountCheck[1]
        ? isTeamsCountCheck[1].teamId
        : "비어있음",
      yourTeamId3: isTeamsCountCheck[2]
        ? isTeamsCountCheck[2].teamId
        : "비어있음",
    });
  } catch (err) {
    next(err);
  }
});

// 선수 선발 등록 API
router.post("/team/:teamId", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { teamId } = await teamIdParamValidate(req.params);
    const { userPlayerId, position } = await teamInfoBodyValidate(req.body);
    // userPlayerId는 유저가 가지고 있는 선수 등록할 userPlayerId를 요청받습니다.
    // position는 team컬럼 중 userPlayerId1, userPlayerId2, userPlayerId3 등 어느 위치(실제 축구라면 포지션)에 등록할 것인지를 요청받습니다.

    let team = await userPrisma.teams.findFirst({
      where: {
        teamId: +teamId,
      },
    });
    // 팀이 없으면 새로 팀을 생성하고 선발할 선수를 해당 자리에 등록합니다.
    if (!team) throw new NotFoundError("해당 팀이 존재하지 않습니다.");

    const userPlayer = await userPrisma.userPlayers.findFirst({
      where: {
        userPlayerId: userPlayerId,
      },
    });
    if (!userPlayer || userPlayer.count <= 0)
      throw new BadRequestError("현재 소유하고 있는 선수가 아닙니다.");
    if (+userId !== userPlayer.userId)
      throw new ConflictError("현재 계정의 선수가 아닙니다.");

    const player = await gamePrisma.players.findFirst({
      where: { playerId: userPlayer.playerId },
    });
    if (!player) throw new NotFoundError("해당 선수 정보가 없습니다.");

    // 현재 계정의 팀이 아닐때 현재 계정이 가지고 있는 팀을 응답으로 보여줍니다.
    if (+userId !== team.userId) {
      const isTeamCountCheck = await userPrisma.teams.findMany({
        where: {
          userId: +userId,
        },
      });
      return res.status(409).json({
        message: "현재 계정의 팀이 아닙니다.",
        yourTeamId1: isTeamCountCheck[0]
          ? isTeamCountCheck[0].teamId
          : "비어있음",
        yourTeamId2: isTeamCountCheck[1]
          ? isTeamCountCheck[1].teamId
          : "비어있음",
        yourTeamId3: isTeamCountCheck[2]
          ? isTeamCountCheck[2].teamId
          : "비어있음",
      });
    }

    if (team[`userPlayerId${position}`] === userPlayerId) {
      throw new ConflictError("해당 자리에 같은 선수가 이미 있습니다.");
    }

    // 해당 userPlayerId 선수가 이미 팀에 존재하고 선발 위치만을 변경해 주기위한 코드들입니다. 그리고 선발할 위치에 다른 선수가 있으면 다른 선수의 userPlayerId를 서로 위치를 변경하기 위해 작성해 보았습니다.
    let originPosition = null; // 선발할려던 userPlayerId가 이미 존재하여 위치를 알기위해 사용합니다. 그래야 이 위치에 다른 userPlayerId를 넣어주기 위해서 입니다.
    let otherUserPlayerId = null; // 선발할 위치에 있던 다른 선수의 userPlayerId를 가집니다.
    for (let i = 1; i < 4; i++) {
      // 선발 선수가 이미 존재하는 위치를 찾아서 지정합니다.
      if (userPlayerId === team[`userPlayerId${i}`]) {
        originPosition = i;
        break;
      }
    }
    // 해당 선발할려는 위치에 선수가 존재하면 그 선수의 userPlayerId를 가져옵니다.
    if (team[`userPlayerId${position}`]) {
      otherUserPlayerId = team[`userPlayerId${position}`];
    }
    // 다른 선수의 위치를 원래 선발할려는 선수의 위치를 변경해 줍니다.
    if (originPosition) {
      await userPrisma.teams.update({
        data: {
          [`userPlayerId${originPosition}`]: otherUserPlayerId,
        },
        where: { teamId: +teamId },
      });
    }

    // 해당 자리에 선수 선발 등록
    await userPrisma.teams.update({
      data: {
        [`userPlayerId${position}`]: userPlayerId,
      },
      where: { teamId: +teamId },
    });

    return res.status(201).json({
      message: `${player.name} 선수를 ${team.teamId}번 팀에 등록했습니다.`,
    });
  } catch (err) {
    next(err);
  }
});

// 선수 후보 등록 API
router.patch("/team/:teamId", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { teamId } = await teamIdParamValidate(req.params);
    const { position } = await positionBodyValidate(req.body);

    const isTeam = await userPrisma.teams.findFirst({
      where: { teamId: +teamId },
    });
    if (!isTeam) throw new NotFoundError("팀이 존재 하지 않습니다.");

    // 현재 계정의 팀이 아닐때 현재 계정이 가지고 있는 팀을 응답으로 보여줍니다.
    if (+userId !== isTeam.userId) {
      const isTeamCountCheck = await userPrisma.teams.findMany({
        where: {
          userId: +userId,
        },
      });
      return res.status(409).json({
        message: "현재 계정의 팀이 아닙니다.",
        yourTeamId1: isTeamCountCheck[0]
          ? isTeamCountCheck[0].teamId
          : "비어있음",
        yourTeamId2: isTeamCountCheck[1]
          ? isTeamCountCheck[1].teamId
          : "비어있음",
        yourTeamId3: isTeamCountCheck[2]
          ? isTeamCountCheck[2].teamId
          : "비어있음",
      });
    }
    if (!isTeam[`userPlayerId${position}`])
      throw new BadRequestError("해당위치에 선수가 존재하지 않습니다.");

    const userPlayer = await userPrisma.userPlayers.findFirst({
      where: { userPlayerId: isTeam[`userPlayerId${position}`] },
    });
    if (!userPlayer)
      throw new BadRequestError("현재 소유하고 있는 선수가 아닙니다.");

    const player = await gamePrisma.players.findFirst({
      where: { playerId: userPlayer.playerId },
    });
    if (!player) throw new NotFoundError("해당 선수 정보가 없습니다.");

    // 팀 위치의 userPlayerId를 null로 변경 후보로 변경
    await userPrisma.teams.update({
      data: {
        [`userPlayerId${position}`]: null,
      },
      where: { teamId: +teamId },
    });

    // // 변경된 팀의 선수 명단을 확인합니다.
    // const renewalTeamUserPlayerIds = await userPrisma.teams.findFirst({
    //   select: {
    //     userPlayerId1: true,
    //     userPlayerId2: true,
    //     userPlayerId3: true,
    //   },
    //   where: { teamId: +teamId },
    // });

    // const userPlayerIds = Object.values(renewalTeamUserPlayerIds);

    // let isUserPlayerIdCheck = false;
    // for (let i = 0; i < userPlayerIds.length; i++) {
    //   // 팀에 선수 한명이라도 있으면 isUserPlayerIdCheck = true;
    //   if (userPlayerIds[i]) {
    //     isUserPlayerIdCheck = true;
    //     break;
    //   }
    // }

    // // 모든 위치에 선수가 없으면 팀 레코드 삭제
    // if (!isUserPlayerIdCheck) {
    //   await userPrisma.teams.delete({
    //     where: { teamId: +teamId },
    //   });
    // }

    return res
      .status(200)
      .json({ message: `${player.name} 선수를 후보로 등록 되었습니다.` });
  } catch (err) {
    next(err);
  }
});

// 팀 삭제 API
router.delete("/team/:teamId", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { teamId } = await teamIdParamValidate(req.params);

    const team = await userPrisma.teams.findFirst({
      where: { teamId: +teamId },
    });
    if (!team) throw new NotFoundError("팀이 존재하지 않습니다.");
    if (team.userId !== userId) {
      const isTeamCountCheck = await userPrisma.teams.findMany({
        where: { userId: +userId },
      });
      return res.status(409).json({
        message: "현재 계정의 팀이 아닙니다.",
        yourTeamId1: isTeamCountCheck[0]
          ? isTeamCountCheck[0].teamId
          : "비어있음",
        yourTeamId2: isTeamCountCheck[1]
          ? isTeamCountCheck[1].teamId
          : "비어있음",
        yourTeamId3: isTeamCountCheck[2]
          ? isTeamCountCheck[2].teamId
          : "비어있음",
      });
    }

    await userPrisma.teams.delete({
      where: { teamId: +teamId },
    });

    return res.status(200).json({ message: `${teamId}팀이 삭제 되었습니다.` });
  } catch (err) {
    next(err);
  }
});

export default router;
