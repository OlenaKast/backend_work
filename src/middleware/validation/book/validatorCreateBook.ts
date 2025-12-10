import { Request, Response, NextFunction } from 'express';
import validator from 'validator';
import { AppError } from '../../../errors/AppError';

export async function validatorCreateBook(req: Request, _res: Response, next: NextFunction) {
  const { title, price, isbn } = req.body;

  if (!title || validator.isEmpty(title)) {
    return next(new AppError(400, 'Book title is required'));
  }

  if (price === undefined || price === null) {
     return next(new AppError(400, 'Price is required'));
  }

  if (!validator.isFloat(String(price), { gt: 0 })) {
    return next(new AppError(400, 'Price must be a number greater than 0'));
  }

  if (!isbn || !validator.isLength(isbn, { min: 10, max: 13 })) {
     return next(new AppError(400, 'ISBN must be between 10 and 13 characters'));
  }

  return next();
}