import dotenv from "dotenv";
import express from "express";
import userPlayersRouter from "./routes/userPlayers.router.js";
dotenv.config();

const app = express();

const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.use("/api", [userPlayersRouter]);

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸습니다.");
});
