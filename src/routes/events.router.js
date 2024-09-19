import dotenv from "dotenv";
import express from "express";
import { gamePrisma, userPrisma } from "../utils/prisma/index.js";

dotenv.config();

const MATCH_RESULT = {
  WIN: 1,
  DRAW: 2,
  LOSE: 3,
};
Object.freeze(MATCH_RESULT);

const router = express.Router();

router.patch("/events/matching/:teamId", async (req, res, next) => {
  try {
    const userId = 1; // req.header.authorization
    const myTeamId = 1; // req.params
    const enemyTeamId = 4; // req.body

    const myTeam = await userPrisma.teams.findFirst({
      where: { userId: myTeamId },
    });

    const enemyTeam = await userPrisma.teams.findFirst({
      where: { teamId: enemyTeamId },
    });

    console.log({ myTeam, enemyTeam });

    return res.status(200).json({ message: "상대팀 지정하여 플레이 테스트" });
  } catch (error) {
    next(error);
  }
});

function getTeamScore(team, weight) {
  let teamScore = 0;

  for (let i = 0; i < 3; i++) {
    let playerScore = 0;

    for (const key in weight) {
      playerScore += parseFloat((team[i][key] * weight[key]).toFixed(2));
    }

    console.log(team[i].name, " : ", playerScore);

    teamScore += playerScore;
  }

  console.log(teamScore);

  return teamScore;
}

async function getMatchResult(myTeamScore, enemyTeamScore) {
  // 최대 점수는 두 팀의 총 점수의 합으로 하시면 됩니다!
  const maxScore = myTeamScore + enemyTeamScore;
  const randomValue = parseFloat(Math.random() * maxScore).toFixed(2);

  console.log(randomValue, " => (", myTeamScore, ")");

  if (randomValue < myTeamScore) {
    // A 유저 승리 처리
    const aScore = Math.floor(Math.random() * 4) + 2; // 2에서 5 사이
    const bScore = Math.floor(Math.random() * Math.min(3, aScore)); // aScore보다 작은 값을 설정

    return { result: MATCH_RESULT.WIN, score: `A - ${aScore} : ${bScore} - B` };
  } else if (randomValue === myTeamScore) {
    // 무승부 처리 (무승부 처리를 어떻게 해야할까... 일정 범위를 줘야하나)
    const aScore = Math.floor(Math.random() * 6); // 0에서 5 사이
    const bScore = aScore;

    return {
      result: MATCH_RESULT.DRAW,
      score: `A - ${aScore} : ${bScore} - B`,
    };
  } else {
    // B 유저 승리 처리
    const bScore = Math.floor(Math.random() * 4) + 2; // 2에서 5 사이
    const aScore = Math.floor(Math.random() * Math.min(3, bScore)); // bScore보다 작은 값을 설정

    return {
      result: MATCH_RESULT.LOSE,
      score: `A - ${aScore} : ${bScore} - B`,
    };
  }
}

async function playing() {
  const userId = 1; // req.header.authorization
  const myTeamId = 1; // req.params
  const enemyTeamId = 4; // req.body

  const myTeam = await userPrisma.teams.findFirst({
    where: { userId: myTeamId },
    select: {
      teamId: true,
      userId: true,
      UserPlayer1: true,
      UserPlayer2: true,
      UserPlayer3: true,
    },
  });

  const enemyTeam = await userPrisma.teams.findFirst({
    where: { teamId: enemyTeamId },
    select: {
      teamId: true,
      userId: true,
      UserPlayer1: true,
      UserPlayer2: true,
      UserPlayer3: true,
    },
  });

  const myTeamArr = [];
  const enemyTeamArr = [];

  for (let i = 1; i < 4; i++) {
    const myPlayerId = myTeam[`UserPlayer` + i].playerId;
    const myPlayer = await gamePrisma.players.findFirst({
      where: { playerId: myPlayerId },
      select: {
        speed: true,
        decision: true,
        power: true,
        defense: true,
        stamina: true,
      },
    });
    myTeamArr.push(myPlayer);

    const enemyPlayerId = enemyTeam[`UserPlayer` + i].playerId;
    const enemyPlayer = await gamePrisma.players.findFirst({
      where: { playerId: enemyPlayerId },
      select: {
        speed: true,
        decision: true,
        power: true,
        defense: true,
        stamina: true,
      },
    });
    enemyTeamArr.push(enemyPlayer);
  }

  const weight = {
    speed: 0.1,
    decision: 0.25,
    power: 0.15,
    defense: 0.3,
    stamina: 0.2,
  };

  const myTeamScore = getTeamScore(myTeamArr, weight);
  const enemyTeamScore = getTeamScore(enemyTeamArr, weight);

  console.log(myTeamScore, enemyTeamScore);

  const matchResult = await getMatchResult(myTeamScore, enemyTeamScore);

  // 경기 결과를 매치로그에 담자.
  if (matchResult.result === MATCH_RESULT.WIN) {
    // 우리 팀 기준 : 승리
    await userPrisma.matchLogs.create({
      data: {
        userId: myTeam.userId,
        enemyUserId: enemyTeam.userId,
        isWin: MATCH_RESULT.WIN,
      },
    });

    // 적 팀 기준: 패배
    await userPrisma.matchLogs.create({
      data: {
        userId: enemyTeam.userId,
        enemyUserId: myTeam.userId,
        isWin: MATCH_RESULT.LOSE,
      },
    });
  } else if (matchResult.result === MATCH_RESULT.DRAW) {
    // 우리 팀 기준 : 무승부
    await userPrisma.matchLogs.create({
      data: {
        userId: myTeam.userId,
        enemyUserId: enemyTeam.userId,
        isWin: MATCH_RESULT.DRAW,
      },
    });

    // 적 팀 기준: 무승부
    await userPrisma.matchLogs.create({
      data: {
        userId: enemyTeam.userId,
        enemyUserId: myTeam.userId,
        isWin: MATCH_RESULT.DRAW,
      },
    });
  } else if (matchResult.result === MATCH_RESULT.LOSE) {
    // 우리 팀 기준 : 패배
    await userPrisma.matchLogs.create({
      data: {
        userId: myTeam.userId,
        enemyUserId: enemyTeam.userId,
        isWin: MATCH_RESULT.LOSE,
      },
    });

    // 적 팀 기준: 승리
    await userPrisma.matchLogs.create({
      data: {
        userId: enemyTeam.userId,
        enemyUserId: myTeam.userId,
        isWin: MATCH_RESULT.WIN,
      },
    });
  } else {
    // 승리, 무승부, 패배도 아니다?
    // 서버 에러로 간주
  }

  return { message: { matchResult } };
}

const result = await test();

console.log(result);

export default router;
