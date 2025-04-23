import "dotenv/config"
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { routes } from "./routes";

console.log(process.env.PORT)
const  SERVER_PORT  = process.env.PORT || "3333";

const app: Express = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(routes);

app.listen(SERVER_PORT, () => {
  console.log(`Backend started at port ${SERVER_PORT}`);
});

export { app };