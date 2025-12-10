import { Request, Response, NextFunction } from 'express';
import validator from 'validator';
import { AppError } from '../../../errors/AppError';

export async function validatorCreateEmployee(req: Request, _res: Response, next: NextFunction) {
  const { fullName, email, password, post, phoneNumber } = req.body;

  if (!fullName || validator.isEmpty(fullName)) {
    return next(new AppError(400, 'Full name is required'));
  }

  if (!email || !validator.isEmail(email)) {
    return next(new AppError(400, 'Invalid email format'));
  }

  if (!password || !validator.isLength(password, { min: 4 })) {
    return next(new AppError(400, 'Password must be at least 4 characters long'));
  }

  if (!post || validator.isEmpty(post)) {
    return next(new AppError(400, 'Post (position) is required'));
  }

  return next();
}