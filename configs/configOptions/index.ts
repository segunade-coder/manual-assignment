import { CorsOptions } from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
export const corsConfig: CorsOptions = {
  origin: [process.env.CLIENT_URL as string, "http://127.0.0.1:5500"],
  credentials: true,
};

const storeOptions = {
  host: process.env.M_HOST as string,
  user: process.env.M_USERNAME as string,
  password: (process.env.M_PASSWORD as string) || "",
  database: process.env.M_DATABASE as string,
  port: parseInt(process.env.MYSQL_PORT as string),
  clearExpired: true,
  checkExpirationInterval: 50000,
  expiration: 1000 * 60 * 60 * 24,
  createDatabaseTable: true,
  connectionLimit: 1,
  endconnectionOnClose: true,
  charset: "utf8mb4_bin",
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data",
    },
  },
};
