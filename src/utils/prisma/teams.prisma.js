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
