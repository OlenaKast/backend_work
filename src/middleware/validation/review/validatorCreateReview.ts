import { Request, Response, NextFunction } from 'express';
import validator from 'validator';
import { AppError } from '../../../errors/AppError';

export async function validatorCreateReview(req: Request, _res: Response, next: NextFunction) {
  const { rating, text, bookId, userId } = req.body;

  if (!bookId || !userId) {
    return next(new AppError(400, 'Book ID and User ID are required'));
  }

  const numRating = Number(rating);
  if (isNaN(numRating) || numRating < 0 || numRating > 5) {
    return next(new AppError(400, 'Rating must be between 0 and 5'));
  }

  if (!text || validator.isEmpty(text)) {
    return next(new AppError(400, 'Review text is required'));
  }

  return next();
}