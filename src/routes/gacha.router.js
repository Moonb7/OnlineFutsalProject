import express from "express";
import { BadRequestError } from "../errors/BadRequestError.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { gachaBodyValidate } from "../utils/joi/gacha.validation.js";
import { gacha, GACHA_PRICE } from "../utils/logic/gacha.js";
import {
  CACHE_SOURCE,
  createUserCacheLogToDB,
  getUserCacheFromDB,
} from "../utils/prisma/caches.prisma.js";
import {
  createUserPlayerToDB,
  findUserPlayerFromDB,
  increaseUserPlayerCountToDB,
} from "../utils/prisma/userPlayers.prisma.js";

const router = express.Router();

/** 선수 가챠 뽑기 API **/
router.post("/gacha", authMiddleware, async (req, res, next) => {
  try {
    // userId는 인증처리 미들웨어 구현 후 추후 req.header.authorization 교체
    const userId = req.user.userId;
    const { gachaCount } = await gachaBodyValidate(req.body);

    // user가 gacha를 gachaCount 할만큼 Cache가 있는지 체크
    const userCache = await getUserCacheFromDB(userId);

    if (userCache < GACHA_PRICE * gachaCount)
      throw new BadRequestError(
        "유저의 돈이 부족하여 선수 뽑기를 할 수 없습니다! 당장 캐시를 충전하세요!",
      );

    // cache가 충분히 있다면, 총 gachaCount만큼 gacha를 진행한다.
    // 뽑은 선수를 한번에 DB에 반영하는게 좋으니 따로 Map에 저장한다.
    const gachaPlayerMap = new Map();

    for (let i = 0; i < gachaCount; i++) {
      // gacha를 통해 선수 카드를 뽑는다.
      const gachaPlayer = await gacha();

      if (!gachaPlayerMap.has(gachaPlayer.playerId)) {
        gachaPlayerMap.set(gachaPlayer.playerId, {
          tierName: gachaPlayer.tiers.tierName,
          playerName: gachaPlayer.name,
          count: 1,
        });
      } else {
        gachaPlayerMap.set(gachaPlayer.playerId, {
          tierName: gachaPlayer.tiers.tierName,
          playerName: gachaPlayer.name,
          count: gachaPlayerMap.get(gachaPlayer.playerId).count + 1,
        });
      }
    }

    console.log(gachaPlayerMap);

    let message = "";

    for (const [playerId, playerInfo] of gachaPlayerMap) {
      const playerCount = playerInfo.count;
      const userPlayer = await findUserPlayerFromDB(userId, playerId, 0);

      // 뽑은 선수 카드를 User의 UserPlayers(인벤토리) 테이블에 저장해준다.
      if (!userPlayer) {
        // 1. 인벤토리에 없는 경우, 새로 UserPlayer 생성
        await createUserPlayerToDB(userId, playerId, playerCount, 0);
      } else {
        // 2. 뽑은 선수가 이미 인벤토리에 있는 경우, count만 +1로 update
        await increaseUserPlayerCountToDB(userPlayer.userPlayerId, playerCount);
      }

      // S 등급의 선수 카드 뽑기에 성공했을 경우, message에 축하 문구를 추가한다.
      if (playerInfo.tierName === "S") {
        message += `*** 축하합니다~~ 'S' 등급인 '${playerInfo.playerName}'를 뽑으셨습니다! ***\n`;
      }
    }

    // CacheLog 생성 : 유저의 카드 뽑기 총 비용만큼 기록
    await createUserCacheLogToDB(
      userId,
      -GACHA_PRICE * gachaCount,
      CACHE_SOURCE.GACHA,
      `카드 뽑기 총 ${gachaCount}번`,
    );

    message += `총 ${gachaCount}개의 선수 카드를 뽑으셨습니다.`;

    return res.status(201).json({
      message,
      data: Object.values(Object.fromEntries(gachaPlayerMap)),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
