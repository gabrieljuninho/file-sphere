import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { logger } from "./utils/logger";

const app: Application = express();

dotenv.config();

app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: Number = Number(process.env.PORT);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world 5000");
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
