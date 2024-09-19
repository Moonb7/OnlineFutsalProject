import express from "express";
import { prisma } from "../utils/prisma/index.js";

const router = express.Router();

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

function getMatchResult(firstTeamScore, secondTeamScore) {
  // 최대 점수는 두 팀의 총 점수의 합으로 하시면 됩니다!
  const maxScore = firstTeamScore + secondTeamScore;

  const randomValue = Math.random() * maxScore;
  if (randomValue < firstTeamScore) {
    // A 유저 승리 처리
    const aScore = Math.floor(Math.random() * 4) + 2; // 2에서 5 사이
    const bScore = Math.floor(Math.random() * Math.min(3, aScore)); // aScore보다 작은 값을 설정
    result = `A 유저 승리: A ${aScore} - ${bScore} B`;
  } else {
    // B 유저 승리 처리
    const bScore = Math.floor(Math.random() * 4) + 2; // 2에서 5 사이
    const aScore = Math.floor(Math.random() * Math.min(3, bScore)); // bScore보다 작은 값을 설정
    result = `B 유저 승리: B ${bScore} - ${aScore} A`;
  }

  return { winner: true, score: `` };
}

function playingGame() {
  const firstTeamArr = [
    {
      name: "호날두",
      speed: 85,
      decision: 90,
      power: 88,
      defense: 60,
      stamina: 80,
    },
    {
      name: "메시",
      speed: 78,
      decision: 75,
      power: 80,
      defense: 70,
      stamina: 85,
    },
    {
      name: "손흥민",
      speed: 70,
      decision: 60,
      power: 65,
      defense: 90,
      stamina: 82,
    },
  ];

  const secondTeamArr = [
    {
      name: "호날두",
      speed: 88,
      decision: 85,
      power: 90,
      defense: 55,
      stamina: 78,
    },
    {
      name: "메시",
      speed: 80,
      decision: 70,
      power: 75,
      defense: 72,
      stamina: 88,
    },
    {
      name: "손흥민",
      speed: 72,
      decision: 65,
      power: 68,
      defense: 92,
      stamina: 83,
    },
  ];

  const weight = {
    speed: 0.1,
    decision: 0.25,
    power: 0.15,
    defense: 0.3,
    stamina: 0.2,
  };

  const firstTeamScore = getTeamScore(firstTeamArr, weight);
  const secondTeamScore = getTeamScore(secondTeamArr, weight);

  return 0;
}

playingGame();

router.get("/userPlayers", async (req, res, next) => {
  const data = await prisma.userPlayers.findFirst();

  return res.status(200).json({ message: "test API", data: data });
});

export default router;
