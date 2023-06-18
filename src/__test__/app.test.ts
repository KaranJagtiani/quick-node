import request from "supertest";
import User from "../models/user";
import app from "../server";
import sequelize from "../utils/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

beforeAll(async () => {
  void User.sync();
});

afterEach(async () => {
  try {
    await User.destroy({ where: {}, force: true });
  } catch (err) {
    console.error("Error during cleanup: ", err);
  }
});

afterAll(async () => {
  await sequelize.close();
});

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

describe("POST /register", () => {
  it("should create a new user and return 201 status", async () => {
    const response = await request(app).post("/user/register").send({
      email: "test@gmail.com",
      password: "testpassword",
    });

    expect(response.status).toBe(201);
    expect(response.body.email).toEqual("test@gmail.com");
  });
});

describe("POST /login", () => {
  it("should login an existing user and return a token", async () => {
    const hashedPassword = await bcrypt.hash("testpassword", 10);

    await User.create({ email: "test@gmail.com", password: hashedPassword });

    const response = await request(app).post("/user/login").send({
      email: "test@gmail.com",
      password: "testpassword",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});

describe("GET /profile", () => {
  it("should return the profile information of the authenticated user", async () => {
    const hashedPassword = await bcrypt.hash("testpassword", 10);

    const user = await User.create({
      email: "test@gmail.com",
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET, {
      expiresIn: "1w",
    });

    const response = await request(app)
      .get("/user/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toEqual(user.dataValues.id);
    expect(response.body.email).toEqual("test@gmail.com");
  });
});
