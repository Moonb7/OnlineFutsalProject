import express from "express";
import { gamePrisma, userPrisma } from "../utils/prisma/index.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { BadRequestError } from "../errors/BadRequestError.js";
import { CACHE_SOURCE } from "../utils/prisma/caches.prisma.js";

const router = express.Router();

router.get('/users/userplayer' , async (req,res, next) => {
    const { userId } = req.body;

    try {
        const userplayers = await userPrisma.userPlayers.findMany({
            where: {userId},
        });


        for ( const player of userplayers) {

            const playerInfo = await gamePrisma.players.findUnique({
                where: { playerId : player.playerId },
                select: { name:true },
            });


            if (playerInfo) {
                player["name"] = playerInfo.name;
                
            }

            else {
                throw new NotFoundError("선수 데이터가 DB에 없습니다");
            }
        }
        const response = Object.values(userplayers);

        return res.status(200).json(response);
    } catch(error) {
        next(error);
    }

})

router.post("/users/userplayer", async (req, res, next) => {
    const { userId ,playerId, upgrade, count : count } = req.body;

    try {
      const player = await gamePrisma.players.findUnique({
        where: { playerId },
        select: {
          playerId: true,
          name: true,
          tiers: true,
        },
      });
      if (!player) throw new NotFoundError("선수 데이터가 DB에 없습니다");
  
      // 요청한 등급의 선수가 내 인벤토리에 있는지 검증
      const userPlayer = await userPrisma.userPlayers.findFirst({
        where: { userId, playerId, upgrade },
      });
      if (!userPlayer) throw new BadRequestError("선수 데이터가 DB에 없습니다");

      if(count >userPlayer.count) throw new BadRequestError("판매 할 선수가 부족합니다");

  
      // 해당 등급의 선수가 내 인벤토리에 있는것은 확실하다
      // 이제 판매를 하면 된다.
      // userPlayer : userPlayerId, userId, playerId, count, upgrade
  
      // findUnique(), update(), delete() : 공통점이 무조건 `하나의 행`에만 실행이 되야 하는 함수
  
      // userId : 1, playerId: 1, upgrade: 0
      // 1. count >= 2  => 91이라고 가정 -> 90 : update
      // 이 때는
      if (userPlayer.count > count) {
        const updatePlayer = await userPrisma.userPlayers.update({
          where: { userPlayerId: userPlayer.userPlayerId },
          data: {
            count: { decrement : count },
          },
        });
      }
      // 2. count === 1
      // 삭제를 해야되니가 : delete
      else {
        const deletePlayer = await userPrisma.userPlayers.delete({
          where: { userPlayerId: userPlayer.userPlayerId },
        });
      }
  
      // 판매 가격 = 선수의 기본 판매 금액 * 업그레이드
      // 0 ~ 4 : 1 ~ 5
      const sellPlayerPrice = player.tiers.salePrice * (userPlayer.upgrade + 1) * (userPlayer.count);
  
      // 이제 해당 등급의 선수를 판매하면서 인벤토리를 최신화시켰다.
      // Cache에 쓴 금액을 기록하자.
      const cacheLog = await userPrisma.caches.create({
        data: {
          userId: userId,
          cacheChange: sellPlayerPrice,
          cacheSource: CACHE_SOURCE.SELL_PLAYER,
          cacheComment: "선수 판매",
        },
      });
  
      return res.status(200).json({
        message: `[${player.tiers.tierName}] 등급의 (${player.name}) 선수를 ${count} 장 판매 완료하였습니다.`,
      });
    } catch (error) {
      next(error);
    }
  });


export default router;
