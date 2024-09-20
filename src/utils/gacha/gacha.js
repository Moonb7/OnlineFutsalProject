import { gamePrisma } from "../prisma/index.js";


export async function gacha() {
  const tiers = await gamePrisma.tiers.findMany({
    select: {
      tierId: true,
      tierName: true,
      probability: true,
    },
  });

  const randomValue = Math.random() * 100;
  let selectedTier = undefined;
  let acc = 0;

  for (let i = 0; i < tiers.length; i++) {
    if (randomValue < tiers[i].probability + acc) {
      selectedTier = tiers[i];
      break;
    }
    acc += tiers[i].probability;
  }

  console.log(`tier : ${selectedTier.tierName} / randomValue : ${randomValue}`);

  const players = await gamePrisma.players.findMany({
    where: { tierId: selectedTier.tierId },
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

  // 무조건 Tier마다 최소 한 선수는 등록할 것이므로
  // 우선 players의 길이가 0인 경우는 생각하지 않겠다.

  const randomPlayerIndex = Math.floor(Math.random() * players.length);
  const selectedPlayer = players[randomPlayerIndex];

  return selectedPlayer;
}
