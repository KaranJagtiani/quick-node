import express from "express";
import dotenv from "dotenv";
import path from "path";
import sequelize from "./utils/database";
import User from "./models/user";
import userRouter from "./routes/user";

void User.sync();

if (process.env.NODE_ENV == "development") {
  dotenv.config({ path: path.resolve(__dirname, "../.env.development") });
}

if (process.env.NODE_ENV == "test") {
  dotenv.config({ path: path.resolve(__dirname, "../.env.test") });
}

const app = express();

app.use(express.json());

app.use("/user", userRouter);

const start = async (): Promise<void> => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();

export default app;
