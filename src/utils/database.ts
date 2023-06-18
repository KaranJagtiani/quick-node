import { Sequelize } from "sequelize";
import path from "path";
import dotenv from "dotenv";

if (process.env.NODE_ENV == "development") {
  dotenv.config({ path: path.resolve(__dirname, "../../.env.development") });
}

if (process.env.NODE_ENV == "test") {
  dotenv.config({ path: path.resolve(__dirname, "../../.env.test") });
}

const DB_URL = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

export const sequelize = new Sequelize(DB_URL, {
  dialect: "postgres",
  protocol: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error: Error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
