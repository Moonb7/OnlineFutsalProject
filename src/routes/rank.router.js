import express from "express";
import { userPrisma } from "../utils/prisma/index.js";

const router = express.Router();

// 승 / 무 / 패 표시
// 승률
// 승리한 수/총 경기수 X 100을 하여 승률구하기
// 랭킹은 점수가 높은순으로 정렬

// 랭크 조회 API
router.get("/events/rank", async (req, res, next) => {
  try {
    // 쿼리문 이용해서 값 구해보기
    // 현재 MatchLog테이블에 하나의 레코드(row)는 userId하나를 기준으로 경기정보를 기록하고 있습니다.
    // 그래서 각각의 userId와 enemyUserId 값의 경기 결과 값을 구하여
    // 최종적으로 userId마다(그룹으로 묶어서) 모든 경기 결과들을 합쳐서 출력하게 했습니다.
    const result = await userPrisma.$queryRaw`
    SELECT 
      userId,
      name,
      rating,
      sum(win) / (sum(win) + sum(draw) + sum(lose)) * 100 AS winPercentage,
      sum(win) AS win,
      sum(draw) AS draw,
      sum(lose) AS lose
    FROM
      (SELECT 
        m.userId AS userId,
        u.name AS name,
        u.rating AS rating,
        count(if(isWin=1, "WIN", NULL)) as win,
	      count(if(isWin=2, "DRAW", NULL)) as draw,
	      count(if(isWin=3, "LOSE", NULL)) as lose
      FROM 
        MatchLogs m
      JOIN
        Users u ON m.userId = u.userId
      GROUP BY 
        userId
      UNION ALL
        SELECT 
          m.enemyUserId AS userId,
          u.name,
          u.rating,
          count(if(isWin=3, "WIN", NULL)) as win,
	        count(if(isWin=2, "DRAW", NULL)) as draw,
	        count(if(isWin=1, "LOSE", NULL)) as lose
        FROM 
          MatchLogs m
        JOIN
          Users u ON m.enemyUserId = u.userId
      GROUP BY 
        userId) a
    GROUP BY 
      userId -- 최종 userId로 그룹화
    ORDER BY 
      rating desc
  `;

    // 최종적으로 결과 value형태를 재정립하여 json형태 객체를 만듭니다.
    const resultRanking = [];
    for (let i = 0; i < result.length; i++) {
      const message = {
        rank: i + 1,
        userId: result[i].userId,
        name: result[i].name,
        rating: result[i].rating,
        winPercentage: Math.round(result[i].winPercentage) + "%",
        win: +`${result[i].win}`,
        draw: +`${result[i].draw}`,
        lose: +`${result[i].lose}`,
      };

      resultRanking.push(message);
      // resultRanking[`Rank${i + 1}`] = message; // 점수순으로 내림차순하여 그냥 순서대로 순위를 매겨줍니다.

      // 음 점수가 중복일수도 있을것 같은데 음 일단 순서대로 매기자 한번 물어보기
      // 그럼 앞 순위에 있는 점수와 같은지를 확인하여 키 이름만 변경하자
    }

    // 여기서 로그인한 상태면 순위를 다 매긴정보를 바로 해당 유저의 순위를 확인할 수 있게 상단에 표시
    // 헤더로 토큰을 받고 받은 토큰이 해당 로그인한 아이디가 맞으면
    // const { authorization } = req.headers;
    // if (authorization) {
    //   const [tokenType, token] = authorization.split(' ');
    //   if (tokenType === 'Bearer') {
    //     const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //     const id = decodedToken.id;

    //     // id를 가지고 user 찾아오기
    //     const user = await prisma.users.findFirst({
    //       where: { id: id },
    //     });

    // 임시로 userId값을 지정하였습니다.
    const userId = 2;
    for (let i = 0; i < resultRanking.length; i++) {
      if (userId && userId === resultRanking[i].userId) {
        const userRankInfo = resultRanking[i];
        return res.status(200).json({
          userRankInfo,
          RANKING: resultRanking,
        });
      }
    }

    return res.status(200).json({ RANKING: resultRanking });
  } catch (err) {
    next(err);
  }
});

export default router;
