import { userPrisma } from "./index.js";

export const CACHE_SOURCE = {
  SIGN_UP: 1,
  CHARGE: 2,
  GACHA: 3,
  SELL_PLAYER: 4,
};
Object.freeze(CACHE_SOURCE);



export async function getUserCacheFromDB(userId) {
  const userCache = await userPrisma.caches.aggregate({
    _sum: {
      cacheChange: true,
    },
  });

  return userCache;
}

export async function createUserCacheLogToDB(userId, cacheChange, cacheSource, cacheComment) {
  const createUserCacheLog = await userPrisma.caches.create({
    data: {
      userId,
      cacheChange,
      cacheSource,
      cacheComment,
    },
  });

  return createUserCacheLog;
}
