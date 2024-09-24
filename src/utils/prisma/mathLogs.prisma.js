import { userPrisma } from "./index.js";

export async function createMatchLogToDB(myUserId, enemyUserId, isWin) {
  const matchLog = await userPrisma.matchLogs.create({
    data: {
      userId: myUserId,
      enemyUserId: enemyUserId,
      isWin: isWin,
    },
  });

  return matchLog;
}
