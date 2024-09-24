import { gamePrisma } from "./index.js";

export async function findPlayerFromDB(playerId) {
  const player = await gamePrisma.players.findFirst({
    where: { playerId: playerId },
    select: {
      playerId: true,
      name: true,
      position: true,
      speed: true,
      decision: true,
      power: true,
      defense: true,
      stamina: true,
      tiers: true,
    },
  });

  return player;
}

export async function findPlayersWithTierFromDB(tier) {
  const players = await gamePrisma.players.findMany({
    where: { tierId: tier.tierId },
    select: {
      playerId: true,
      name: true,
      position: true,
      speed: true,
      decision: true,
      power: true,
      defense: true,
      stamina: true,
      tiers: true,
    },
  });

  return players;
}
