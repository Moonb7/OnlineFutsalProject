import jwt from 'jsonwebtoken';
import { userPrisma } from '../utils/prisma/index.js';
import {NotExistAccessTokenError ,UnauthorizedError} from "../errors/AuthError.js"
import { NotFoundError } from "../errors/NotFoundError.js"

export default async (req, res, next) => {
  try {
    const authorization  = req.headers.authorization;

    if (!authorization) {
      throw new NotExistAccessTokenError('유효하지 않은 인증입니다.');
    }

    const [tokenType, token] = authorization.split(' ');

    if (tokenType !== 'Bearer') {
      throw new UnauthorizedError('토큰 타입이 일치하지 않습니다.');
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const name = decodedToken.name;

    const user = await userPrisma.users.findFirst({
      where: { name: name },
    });

    if (!user) {
      throw new NotFoundError('토큰 사용자가 존재하지 않습니다.');
    }

    req.user = user;
    next();
  } catch (error) {
    next(error)
  }
};