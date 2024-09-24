import { findPlayersWithTierFromDB } from "../prisma/players.prisma.js";
import { findAllTiersFromDB } from "../prisma/tiers.prisma.js";

export const GACHA_PRICE = 1000;

export async function gacha() {
  const tiers = await findAllTiersFromDB();

  const randomValue = Math.random() * 100;
  let selectedTier = null;
  let acc = 0;

  // S: 5, A: 15, B: 30, C: 50
  // randomValue = 32
  for (let i = 0; i < tiers.length; i++) {
    if (randomValue < tiers[i].pickProbability + acc) {
      selectedTier = tiers[i];
      break;
    }
    acc += tiers[i].pickProbability;
  }

  console.log(`tier : ${selectedTier.tierName} / randomValue : ${randomValue}`);

  const players = await findPlayersWithTierFromDB(selectedTier);

  // 무조건 Tier마다 최소 한 선수는 등록할 것이므로
  // 우선 players의 길이가 0인 경우는 생각하지 않겠다.

  const randomPlayerIndex = Math.floor(Math.random() * players.length);
  const selectedPlayer = players[randomPlayerIndex];

  return selectedPlayer;
}
