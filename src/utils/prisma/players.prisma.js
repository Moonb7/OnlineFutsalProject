import { gamePrisma } from "./index.js";

export async function findPlayerFromDB(playerId) {
  const player = await gamePrisma.players.findFirst({
    where: { playerId: playerId },
    select: {
      speed: true,
      decision: true,
      power: true,
      defense: true,
      stamina: true,
    },
  });

  return player;
}
