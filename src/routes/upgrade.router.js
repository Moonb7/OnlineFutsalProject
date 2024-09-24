import express from "express";
import { BadRequestError } from "../errors/BadRequestError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  upgradeBodyValidate,
  upgradeParamValidate,
} from "../utils/joi/upgrade.validation.js";
import { upgrade } from "../utils/logic/upgrade.js";
import { getUserCacheFromDB } from "../utils/prisma/caches.prisma.js";
import { findPlayerFromDB } from "../utils/prisma/players.prisma.js";
import { findUserPlayerFromDB } from "../utils/prisma/userPlayers.prisma.js";

const router = express.Router();

/**  선수 카드 강화 API **/
router.post("/upgrade/:playerId", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { playerId } = await upgradeParamValidate(req.params);
    const { upgradeLevel, materialPlayerId } = await upgradeBodyValidate(
      req.body,
    );

    // 강화할 선수가 DB에 존재하는지 검증
    const upgradePlayer = await findPlayerFromDB(playerId);
    if (!upgradePlayer)
      throw new NotFoundError(
        `강화할 (playerId: ${playerId}) 의 선수 데이터가 존재하지 않습니다.`,
      );

    // 해당 강화 레벨을 가진 선수가 내 인벤토리에 존재하는지 검증
    const upgradeUserPlayer = await findUserPlayerFromDB(
      userId,
      playerId,
      upgradeLevel,
    );
    if (!upgradeUserPlayer)
      throw new NotFoundError(
        `강화할 선수인 강화 레벨이 [${upgradeLevel}]인 (${playerId}) 선수가 내 보유 선수들 중에 존재하지 않습니다.`,
      );

    // 재료로 소모할 선수는 선택사항이다.
    let materialPlayer = null;
    let materialUserPlayer = null;

    if (materialPlayerId) {
      // 재료로 사용할 선수가 DB에 존재하는지 검증
      materialPlayer = await findPlayerFromDB(materialPlayerId);
      if (!materialPlayer)
        throw new NotFoundError(
          `재료로 소모할 (${materialPlayerId}) 의 선수 데이터가 존재하지 않습니다.`,
        );

      // 재료로 사용할 선수(무조건 0강)가 내 인벤토리에 존재하는지 검증
      materialUserPlayer = await findUserPlayerFromDB(
        userId,
        materialPlayerId,
        0,
      );
      if (!materialUserPlayer)
        throw new NotFoundError(
          `재료로 소모할 선수인 강화 레벨이 [0]인 (${materialPlayerId}) 선수가 내 보유 선수들 중에 존재하지 않습니다.`,
        );

      // 강화할 선수와 재료로 사용할 선수가 같은 등급(tier)인지 검증
      if (upgradePlayer.tiers.tierId !== materialPlayer.tiers.tierId)
        throw new BadRequestError(
          `강화할 선수의 등급인 '${upgradePlayer.tiers.tierName}'과 일치하고 강화 레벨이 [0]인 선수로만 재료로 소모하실 수 있습니다!`,
        );
    }
    // 강화할 돈이 있는지 검증
    const userCache = await getUserCacheFromDB(userId);

    if (
      userCache <
      upgradePlayer.tiers.upgradePrice * upgradeUserPlayer.upgrade
    )
      throw new BadRequestError(
        `강화 비용이 부족합니다. 현재 유저의 보유 Cache는 총 ${userCache} 입니다.`,
      );

    // 더 검증할 사항이 있을려나...?

    // upgrade(...) : Return { upgradeSuccess: boolean, upga}
    const upgradeResult = await upgrade(
      userId,
      upgradePlayer,
      materialPlayer,
      upgradeUserPlayer,
      materialUserPlayer,
    );

    let message = ``;
    if (upgradeResult.upgradeSuccess) {
      message += `*** 축하합니다~~~ 강화에 성공하셨습니다!!! *** \n
        '${upgradePlayer.tiers.tierName}' 등급인 (${playerId}) 선수의 강화 Level이 [${upgradeLevel}] -> [${upgradeLevel + 1}] 로 상승했습니다.`;
    } else {
      if (upgradeLevel === upgradeResult.upgradeLevel) {
        message += `강화에 실패하셨습니다... \n
        '${upgradePlayer.tiers.tierName}' 등급인 (${playerId}) 선수의 강화 Level이 [${upgradeLevel}] 로 유지됩니다.`;
      } else {
        message += `어우... 강화에 실패하여 강화레벨이 하락하셨습니다... \n
          '${upgradePlayer.tiers.tierName}' 등급인 (${playerId}) 선수의 강화 Level이 [${upgradeLevel}] -> [${upgradeResult.upgradeLevel}] 로 하락했습니다.`;
      }
    }

    return res
      .status(201)
      .json({ message, data: upgradeResult.upgradeResultInfo });
  } catch (error) {
    next(error);
  }
});

export default router;
