import { Request, Response, NextFunction } from 'express';
import validator from 'validator';
import { AppError } from '../../../errors/AppError';

export async function validatorCreateUser(req: Request, _res: Response, next: NextFunction) {
  const { fullName, email, password } = req.body;

  if (!fullName || typeof fullName !== 'string' || validator.isEmpty(fullName)) {
    return next(new AppError(400, 'Full name is required'));
  }

  if (!email || typeof email !== 'string' || !validator.isEmail(email)) {
    return next(new AppError(400, 'Invalid email format'));
  }

  if (!password || typeof password !== 'string' || !validator.isLength(password, { min: 4 })) {
    return next(new AppError(400, 'Password must be at least 4 characters long'));
  }

  return next();
}