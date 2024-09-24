import express from "express";
import { gamePrisma } from "../utils/prisma/index.js";

const router = express.Router();

// 선수 생성 API
router.post("/player", async (req, res, next) => {
  const { name, position, speed, decision, power, defense, stamina, tierId } =
    req.body;

  try {
    const newPlayer = await gamePrisma.players.create({
      data: {
        name,
        position,
        speed,
        decision,
        power,
        defense,
        stamina,
        tierId,
      },
    });
    return res.status(201).json({ id: newPlayer });
  } catch (error) {
    next(error);
  }
});

// 선수 목록  등급별 조회
router.get("/players", async (req, res, next) => {
  try {
    const { tierId } = req.body;

    if (tierId) {
      const players = await gamePrisma.players.findMany({
        where: { tierId: +tierId },
        select: {
          playerId: true,
          name: true,
          tierId: true,
        },
      });

      return res.status(200).json(players);
    }
    const playerCheck = {};
    for (let i = 1; i < 5; i++) {
      const players = await gamePrisma.players.findMany({
        where: { tierId: i },
        select: {
          playerId: true,
          name: true,
          tierId: true,
        },
      });
      playerCheck[`tierId${i}`] = players;
    }
    return res.status(200).json(playerCheck);
  } catch (error) {
    next(error);
  }
});

//선수 상세 조회 API
router.get("/player/:playerId", async (req, res, next) => {
  const { playerId } = req.params;

  try {
    const player = await gamePrisma.players.findUnique({
      where: { playerId: +playerId },
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
    });

    return res.status(200).json({ id: player });
  } catch (error) {
    next(error);
  }
});
export default router;
