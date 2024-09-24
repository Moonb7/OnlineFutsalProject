import express from "express";
import jwt from "jsonwebtoken";
import { userPrisma } from "../utils/prisma/index.js";

const router = express.Router();

// 랭크 조회 API
router.get("/events/rank", async (req, res, next) => {
  // try {
  // 쿼리문 이용해서 값 구해보기
  // 현재 MatchLog테이블에 하나의 레코드(row)는 userId하나를 기준으로 경기정보를 기록하고 있습니다.
  // 그래서 각각의 userId와 enemyUserId 값의 경기 결과 값을 구하여
  // 최종적으로 userId마다(그룹으로 묶어서) 모든 경기 결과들을 합쳐서 출력하게 했습니다.
  const result = await userPrisma.$queryRaw`
    SELECT 
      RANK() over (order by rating desc) as ranking,
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
      userId
    ORDER BY 
      rating desc
  `;
  // 여기서 로그인한 상태면 순위를 다 매긴정보를 바로 해당 유저의 순위를 확인할 수 있게 상단에 표시
  // 헤더로 토큰을 받고 받은 토큰이 해당 로그인한 아이디가 맞으면
  let user = null;
  const { authorization } = req.headers;
  if (authorization) {
    const [tokenType, token] = authorization.split(" ");
    if (tokenType === "Bearer") {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const name = decodedToken.name;

      // id를 가지고 user 찾아오기
      user = await userPrisma.users.findFirst({
        where: { name: name },
      });
    }
  }
  console.log(user);

  // 임시로 userId값을 지정하였습니다.
  let userId = null;
  if (user) {
    userId = user.userId;
  }

  // 로그인한 유저가 있으면 길이를 그대로 가져오고 전부 반복하여 값을 가져오게 하였습니다.
  // 유저가 없으면 값을 재정의할때 최대 10번만 반복하여 값을 가져오게 하였습니다.
  const limitLength = 10;
  const length = userId ? result.length : Math.min(result.length, limitLength);

  const resultRankings = [];
  for (let i = 0; i < length; i++) {
    const rankInfo = {
      ranking: Number(result[i].ranking),
      userId: result[i].userId,
      name: result[i].name,
      rating: result[i].rating,
      winPercentage: Math.round(result[i].winPercentage) + "%",
      win: +result[i].win,
      draw: +result[i].draw,
      lose: +result[i].lose,
    };

    resultRankings.push(rankInfo);
  }

  // 유저Id가 있으면 로그인이 되어있다면 for문을 실행하여 해당 유저의 순위정보를 찾습니다.
  if (userId) {
    for (let i = 0; i < resultRankings.length; i++) {
      if (userId === resultRankings[i].userId) {
        const userRankInfo = resultRankings[i];

        const resultRankingsSlice = resultRankings.slice(0, limitLength); // 클라이언트에겐 최대 순위 10위까지만 출력하기위해 slice를 이용하였습니다.
        return res.status(200).json({
          userRankInfo,
          RANKING: resultRankingsSlice,
        });
      }
    }
  }

  return res.status(200).json({ RANKING: resultRankings });
  // } catch (err) {
  //   next(err);
  // }
});

export default router;
