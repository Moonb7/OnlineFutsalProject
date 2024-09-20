import dotenv from "dotenv";
import express from "express";
import errorHandlingMiddleware from "./middlewares/errorHandling.middleware.js";
import EventRouter from "./routes/events.router.js";
import TeamsRouter from "./routes/teams.router.js";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.use("/api", [EventRouter, TeamsRouter]);

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸습니다.");
});
