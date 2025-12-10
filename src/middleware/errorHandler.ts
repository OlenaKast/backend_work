import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../utils/response/custom-error/CustomError';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode || 500; 
  const message = err.message || 'Something went wrong';

  res.status(status).json({
    status: 'error',
    message,
  });
};