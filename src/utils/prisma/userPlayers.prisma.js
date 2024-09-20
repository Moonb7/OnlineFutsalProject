import { userPrisma } from "./index.js";

export async function findUserPlayerFromDB(userId, playerId) {
  const userPlayer = await userPrisma.userPlayers.findFirst({
    where: { userId, playerId },
    select: {
      userPlayerId: true,
      userId: true,
      playerId: true,
      count: true,
      upgrade: true,
    },
  });

  return userPlayer;
}

export async function createUserPlayerToDB(userId, playerId, count) {
  const createUserPlayer = await userPrisma.userPlayers.create({
    data: {
      userId,
      playerId,
      count,
    },
  });
}

export async function increaseUserPlayerCountToDB(userPlayerId, count) {
  const updateUserPlayer = await userPrisma.userPlayers.update({
    where: { userPlayerId },
    data: {
      count: { increment: count },
    },
    select: {
      userPlayerId: true,
      userId: true,
      playerId: true,
      count: true,
      upgrade: true,
    },
  });

  return updateUserPlayer;
}

export async function decreaseUserPlayerCountToDB(userId, playerId) {
  const updateUserPlayer = await userPrisma.userPlayers.update({
    where: { userId, playerId },
    data: {
      count: { decrement: 1 },
    },
    select: {
      userPlayerId: true,
      userId: true,
      playerId: true,
      count: true,
      upgrade: true,
    },
  });

  return updateUserPlayer;
}

export async function deleteUserPlayerCountToDB(userId, playerId) {
  await userPrisma.userPlayers.delete({
    where: { userId, playerId },
  });

  return updateUserPlayer;
}
