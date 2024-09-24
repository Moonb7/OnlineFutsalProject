import {
  createUserPlayerToDB,
  decreaseUserPlayerCountToDB,
  deleteUserPlayerToDB,
  findUserPlayerFromDB,
  increaseUserPlayerCountToDB,
} from "../prisma/userPlayers.prisma.js";

import {
  CACHE_SOURCE,
  createUserCacheLogToDB,
} from "../prisma/caches.prisma.js";

export async function upgrade(
  userId,
  upgradePlayer,
  materialPlayer,
  upgradeUserPlayer,
  materialUserPlayer,
) {
  let upgradeResult = null;
  let upgradeResultInfo = null;
  const upgradeLevel = upgradeUserPlayer.upgrade;
  const upgradePrice = upgradePlayer.tiers.upgradePrice;

  // 강화 확률을 구한다.
  const defaultPro = upgradePlayer.tiers.defaultUpgradeProbability;
  const decreasePro =
    upgradePlayer.tiers.upgradeDecreaseProbability * upgradeLevel;
  const increasePro = materialPlayer ? 20 : 0;
  const upgradePro = defaultPro - decreasePro + increasePro;

  const randomPro = Math.random() * 100;

  console.log("강화 선수 카드의 현재 레벨 : ", upgradeLevel);
  console.log("최종 강화 확률 : ", upgradePro, ", 랜덤 확률 : ", randomPro);

  // 재료로 사용한 선수를 인벤토리에서 빼준다.
  // - 1) 재료로 사용하 선수가 2개 이상인 경우 : count - 1로 Update
  if (materialUserPlayer) {
    if (materialUserPlayer.count > 1) {
      await decreaseUserPlayerCountToDB(materialUserPlayer.userPlayerId, 1);
    }
    // - 2) 재료로 사용한 선수가 1개인 경우 : Delete
    else {
      await deleteUserPlayerToDB(materialUserPlayer.userPlayerId);
    }
  }

  if (randomPro < upgradePro) {
    // 강화 성공

    // 강화한 선수를 같은 강화 레벨의 인벤토리에서 빼준다.
    if (upgradeUserPlayer.count > 1) {
      await decreaseUserPlayerCountToDB(upgradeUserPlayer.userPlayerId, 1);
    } else {
      await deleteUserPlayerToDB(upgradeUserPlayer.userPlayerId);
    }

    // 강화한 선수의 강화 레벨을 올려서 인벤토리에 재배치시켜준다.
    const upgradeSuccessUserPlayer = await findUserPlayerFromDB(
      userId,
      upgradePlayer.playerId,
      upgradeLevel + 1,
    );

    if (upgradeSuccessUserPlayer) {
      // 1) - 상승한 강화 레벨의 선수가 이미 인벤토리에 있는 경우 : count + 1로 Update
      upgradeResultInfo = await increaseUserPlayerCountToDB(
        upgradeSuccessUserPlayer.userPlayerId,
        1,
      );
    } else {
      // 2) - 상승한 강화 레벨의 선수가 인벤토리에 없는 경우 : 새로 create (count는 1)
      upgradeResultInfo = await createUserPlayerToDB(
        userId,
        upgradePlayer.playerId,
        1,
        upgradeLevel + 1,
      );
    }

    upgradeResult = {
      upgradeSuccess: true,
      upgradeLevel: upgradeLevel + 1,
      upgradeResultInfo,
    };
  } else {
    let decreaseUgradeNum = upgradeLevel;
    upgradeResultInfo = upgradeUserPlayer;

    // 강화 실패
    // 만약 강화한 선수가 3카 이상일 경우, 강화 레벨이 랜덤하게 떨어진다. (최대 1카까지 떨어진다)
    if (upgradeLevel >= 2) {
      // 랜덤한 강화 레벨 하락 수치를 구한다. (0 ~ 현재 강화 레벨)
      decreaseUgradeNum =
        upgradeLevel - Math.round(Math.random() * upgradeLevel);

      // 만약 지금의 강화레벨보다 하락했을 경우, 인벤토리에 알맞게 재배치시켜준다.
      if (decreaseUgradeNum < upgradeLevel) {
        // 강화한 선수와 같은 upgrade를 가진 선수의 개수가 2개 이상인 경우 : count - 1로 Update
        if (upgradeUserPlayer.count > 1) {
          await decreaseUserPlayerCountToDB(upgradeUserPlayer.userPlayerId, 1);
        } else {
          await deleteUserPlayerToDB(upgradeUserPlayer.userPlayerId);
        }

        // 이제 강화한 선수를 떨어진 등급의 인벤토리로 옮긴다.
        // 우선, 떨어진 등급의 선수가 인벤토리에 있는지 체크
        const decreaseUserPlayer = await findUserPlayerFromDB(
          userId,
          upgradePlayer.playerId,
          decreaseUgradeNum,
        );

        if (!decreaseUserPlayer) {
          // 인벤토리에 없다면 새로 Create (count는 1개)
          upgradeResultInfo = await createUserPlayerToDB(
            userId,
            upgradePlayer.playerId,
            1,
            decreaseUgradeNum,
          );
        } else {
          // 인벤토리에 있다면, count만 + 1로 Update
          upgradeResultInfo = await increaseUserPlayerCountToDB(
            decreaseUserPlayer.userPlayerId,
            1,
          );
        }
      }
    }

    upgradeResult = {
      upgradeSuccess: false,
      upgradeLevel: decreaseUgradeNum,
      upgradeResultInfo,
    };
  }

  // 선수 강화에 대한 비용을 Caches 테이블에 기록한다.
  const cacheLog = await createUserCacheLogToDB(
    userId,
    -upgradePrice * (upgradeLevel + 1),
    CACHE_SOURCE.UPGRADE,
    `선수 강화 비용 { tierName: ${upgradePlayer.tiers.tierName}, upgrade: ${upgradeUserPlayer.upgrade}->${upgradeUserPlayer.upgrade + 1} }`,
  );

  return upgradeResult;
}
