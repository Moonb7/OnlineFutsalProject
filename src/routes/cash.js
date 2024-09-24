import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { userPrisma } from '../utils/prisma/index.js';
import Joi from 'joi';
import { CACHE_SOURCE } from '../utils/prisma/caches.prisma.js';

const router = express.Router();


router.post('/cash', authMiddleware, async (req, res, next) => {
    const cashSchema = Joi.object({
        cashChange: Joi.number().integer().min(0).required(),
      });
  try {
    const {cashChange} = await cashSchema.validateAsync(req.body);
    const userId = req.user.userId

    const createUserCacheLog = await userPrisma.caches.create({
        data: {
          userId,
          cacheChange: cashChange,
          cacheSource: CACHE_SOURCE.CHARGE,
          cacheComment: "캐시충전",
        },
      });

      return res.status(201).json({massage: `${cashChange}캐쉬충전을 하였습니다`})
  } catch (error) {
    next(error);
  }
});


export default router;