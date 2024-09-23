import { userPrisma } from "./index.js";

export async function findUserPlayerFromDB(userId, playerId, upgrade) {
  const userPlayer = await userPrisma.userPlayers.findFirst({
    where: { userId, playerId, upgrade },
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

export async function createUserPlayerToDB(userId, playerId, count, upgrade) {
  const createUserPlayer = await userPrisma.userPlayers.create({
    data: {
      userId: userId,
      playerId: playerId,
      count: count,
      upgrade: upgrade,
    },
    select: {
      userPlayerId: true,
      userId: true,
      playerId: true,
      count: true,
      upgrade: true,
    },
  });

  return createUserPlayer;
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

export async function decreaseUserPlayerCountToDB(userPlayerId, count) {
  const updateUserPlayer = await userPrisma.userPlayers.update({
    where: { userPlayerId },
    data: {
      count: { decrement: count },
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

export async function deleteUserPlayerToDB(userPlayerId) {
  const deleteUserPlayer = await userPrisma.userPlayers.delete({
    where: { userPlayerId },
  });

  return deleteUserPlayer;
}
