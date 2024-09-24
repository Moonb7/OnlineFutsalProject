import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/BadRequestError.js";
import { ConflictError } from "../errors/ConflictError.js";
import { userPrisma } from "../utils/prisma/index.js";

dotenv.config();

const router = express.Router();

router.post("/account/sign-up", async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(20).required(),
    password: Joi.string().min(4).max(20).required(),
    passwordCheck: Joi.string().required(),
  });

  try {
    const validation = await schema.validateAsync(req.body);
    const { name, password, passwordCheck } = validation;

    const accountCheck = await userPrisma.users.findUnique({
      where: { name: name },
    });

    if (accountCheck) {
      throw new ConflictError("이미 사용중인 아이디 입니다.");
    }

    if (password !== passwordCheck) {
      throw new BadRequestError("비밀번호가 일치 하지 않습니다.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newaccount = await userPrisma.users.create({
      data: {
        name: name,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "회원가입 성공", account: newaccount });
  } catch (error) {
    next(error);
  }
});

router.post("/account/sign-in", async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
  });
  try {
    const validation = await schema.validateAsync(req.body);
    const { name, password } = validation;

    const account = await userPrisma.users.findFirst({
      where: { name: name },
    });

    const passwordMatch = await bcrypt.compare(password, account.password);

    if (!account || !passwordMatch) {
      throw new BadRequestError("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }

    const token = jwt.sign({ name: account.name }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    res.header("authorization", `Bearer ${token}`);
    res.status(200).json({ message: "로그인 성공", token: token });
  } catch (error) {
    next(error);
  }
});

export default router;
