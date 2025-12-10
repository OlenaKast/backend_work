import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../errors/AppError';

export async function validatorCreateOrder(req: Request, _res: Response, next: NextFunction) {
  const { userId, items } = req.body;

  if (!userId) {
    return next(new AppError(400, 'User ID is required'));
  }
  if (!items || !Array.isArray(items) || items.length === 0) {
    return next(new AppError(400, 'Order must contain at least one book'));
  }
  for (const item of items) {
    if (!item.bookId) {
      return next(new AppError(400, 'Each item must have a bookId'));
    }
    if (!item.quantity || item.quantity <= 0) {
      return next(new AppError(400, 'Quantity must be greater than 0'));
    }
  }

  return next();
}