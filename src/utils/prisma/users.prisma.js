import { userPrisma } from "./index.js";

// 임시 User FindFirst : select를 뭘 해야할지 고민중...
export async function findUserFromDB(userId) {
  const user = await userPrisma.users.findFirst({
    where: { userId },
    select: {
      userId: true,
      rating: true,
    },
  });
  return user;
}

export async function updateUserRatingToDB(userId, score) {
  const user = await userPrisma.users.update({
    where: { userId },
    data: {
      rating: { increment: score },
    },
  });

  return user;
}
