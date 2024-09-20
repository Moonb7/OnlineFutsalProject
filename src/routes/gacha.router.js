import express from "express";
import { BadRequestError } from "../errors/BadRequestError.js";
import { gacha } from "../utils/gacha/gacha.js";
import { gachaBodyValidate } from "../utils/joi/gacha.validation.js";
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

const gachaPrice = 1000;
/** 선수 가챠 뽑기 API **/
// TODO : 뽑은 선수 데이터를 사용자에게 어떻게 보여줄 것인가...
router.post("/gacha", async (req, res, next) => {
  try {
    // userId는 인증처리 미들웨어 구현 후 추후 req.header.authorization 교체
    const userId = 1;
    const { gachaCount } = await gachaBodyValidate(req.body);

    // user가 gacha를 gachaCount 할만큼 Cache가 있는지 체크
    const userCache = await getUserCacheFromDB(userId);

    if (userCache._sum.cacheChange < gachaPrice * gachaCount)
      throw new BadRequestError(
        "유저의 돈이 부족하여 선수 뽑기를 할 수 없습니다! 당장 캐시를 충전하세요!",
      );

    const gachaPlayerMap = new Map();
    // cache가 있다면, 총 gachaCount만큼 gacha를 진행한다.
    for (let i = 0; i < gachaCount; i++) {
      // gacha를 통해 선수 카드를 뽑는다.
      const gachaPlayer = await gacha();

      if (!gachaPlayerMap.has(gachaPlayer.playerId))
        gachaPlayerMap.set(gachaPlayer.playerId, 1);
      else
        gachaPlayerMap.set(
          gachaPlayer.playerId,
          gachaPlayerMap.get(gachaPlayer.playerId) + 1,
        );
      // 뽑은 선수를 한번에 DB에 반영하는게 좋으니 따로 배열에 저장한다.
    }

    console.log(gachaPlayerMap);

    for (const player of gachaPlayerMap) {
      const playerId = player[0];
      const playerCount = player[1];
      const userPlayer = await findUserPlayerFromDB(userId, playerId);

      // 뽑은 선수 카드를 User의 UserPlayers(인벤토리) 테이블에 저장해준다.
      if (!userPlayer) {
        // 1. 인벤토리에 없는 경우, 새로 UserPlayer 생성
        await createUserPlayerToDB(userId, playerId, playerCount);
      } else {
        // 2. 뽑은 선수가 이미 인벤토리에 있는 경우, count만 +1로 update
        await increaseUserPlayerCountToDB(userPlayer.userPlayerId, playerCount);
      }
    }

    // CacheLog 생성 : 유저의 카드 뽑기 총 비용만큼 기록
    await createUserCacheLogToDB(
      userId,
      -gachaPrice * gachaCount,
      CACHE_SOURCE.GACHA,
      `카드 뽑기 총 ${gachaCount}번`,
    );

    return res.status(201).json({
      message: `총 ${gachaCount}번의 선수 카드를 뽑으셨습니다.`,
      data: gachaPlayerMap,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
