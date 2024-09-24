import { userPrisma } from "./index.js";

export async function findTeamFromDB(teamId) {
  const team = await userPrisma.teams.findFirst({
    where: { teamId: teamId },
    select: {
      teamId: true,
      userId: true,
      UserPlayer1: true,
      UserPlayer2: true,
      UserPlayer3: true,
    },
  });

  return team;
}

// 자동 매치 메이킹으로 유저의 Rating 점수와 비슷한 다른 유저의 팀 N개를 조회한다.
export async function findTeamsAutoMatchMakingFromDB(userId, userRating) {
  const autoMatchMakingTeams =
    await userPrisma.$queryRaw`SELECT t.userId, ABS( u.rating - 977) AS gap,
    t.teamId, 
    t.userPlayerId1, 
    up1.playerId AS playerId1,
    up2.playerId AS playerId2,
    up3.playerId AS playerId3,
    up1.upgrade AS upgrade1,
    up2.upgrade AS upgrade2,
    up3.upgrade AS upgrade3,
    t.userPlayerId2, 
    t.userPlayerId3 FROM Users u
    INNER JOIN Teams t ON t.userId=u.userId
    INNER JOIN UserPlayers up1 ON t.userPlayerId1=up1.userPlayerId
    INNER JOIN UserPlayers up2 ON t.userPlayerId2=up2.userPlayerId 
    INNER JOIN UserPlayers up3 ON t.userPlayerId3=up3.userPlayerId 
    GROUP BY t.userId HAVING t.userPlayerId1 IS NOT NULL AND t.userPlayerId2 IS NOT NULL AND t.userPlayerId3 IS NOT NULL AND t.userId != 1
    ORDER BY gap ASC
    LIMIT 10;`;

  return autoMatchMakingTeams;
}
