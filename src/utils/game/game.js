const PLAYER_WEIGHT = {
  speed: 0.1,
  decision: 0.25,
  power: 0.15,
  defense: 0.3,
  stamina: 0.2,
};

export const MATCH_RESULT = {
  WIN: 1,
  DRAW: 2,
  LOSE: 3,
};
Object.freeze(MATCH_RESULT);

export function getTeamScore(team) {
  let teamScore = 0;

  for (let i = 0; i < 3; i++) {
    let playerScore = 0;
    for (const key in PLAYER_WEIGHT) {
      playerScore += parseFloat((team[i][key] * PLAYER_WEIGHT[key]).toFixed(2));
    }
    teamScore += playerScore;
  }

  return teamScore;
}

export function getMatchResult(myTeamScore, enemyTeamScore) {
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
