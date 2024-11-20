import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "express-async-errors";
import http from "http";
import cors from "cors";
import { corsConfig } from "./configs/configOptions";
import router from "./routes";
import { errorHandler } from "./middlewares/errorhandler";
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
import morgan from "morgan";
import logger from "./utils/logger";
import "./models";
// express middleware
process.on("uncaughtException", (error) => {
  logger.error(error.message, { name: error.name, stack: error.stack });
});
app.set("trust proxy", 1);
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(router);
app.use(errorHandler);
server.listen(PORT, () => logger.info(`Live on http://localhost:${PORT}`));
