import { Router, Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RequestWithUser } from "../types/types";
import authenticateToken from "../utils/authenticateToken";

const userRouter = Router();

userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

userRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    console.log("yoo", password, user.dataValues.password);
    const validPassword = await bcrypt.compare(
      password,
      user.dataValues.password || ""
    );
    console.log("yoo 2");

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET, {
      expiresIn: "1w", // token will be valid for 1 week
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

userRouter.get(
  "/profile",
  authenticateToken,
  async (req: Request, res: Response) => {
    const userId = (req as any as RequestWithUser).user.id;
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).send("User not found");
      }

      res.status(200).json({
        id: user.dataValues.id,
        email: user.dataValues.email,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
);

export default userRouter;
