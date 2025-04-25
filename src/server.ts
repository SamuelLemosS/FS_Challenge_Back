import "dotenv/config"
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { routes } from "./routes";
import { ProductRepository } from "./infrastructre/repository/ProductRepository";

const  SERVER_PORT  = process.env.PORT || "3000";
const productRepo = new ProductRepository();

const app: Express = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(routes);
(async () => {
  try {
    await productRepo.connect();
    console.log('Conectado ao banco de dados.');

    app.listen(SERVER_PORT, () => {
      console.log(`Backend started at port ${SERVER_PORT}`);
    });
  } catch (err) {
    console.error('Erro ao conectar ao banco:', err);
    process.exit(1);
  }
})();

export { app };