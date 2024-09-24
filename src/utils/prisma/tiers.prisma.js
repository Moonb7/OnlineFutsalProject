import { gamePrisma } from "./index.js";

export async function findAllTiersFromDB() {
    const tiers = await gamePrisma.tiers.findMany({
        select:{
            tierId: true,
            tierName: true,
            pickProbability: true,
            salePrice: true,
            extraStat: true,
            defaultUpgradeProbability: true,
            upgradeDecreaseProbability: true,
            upgradePrice: true
        },
    });
  
    return tiers;
  }