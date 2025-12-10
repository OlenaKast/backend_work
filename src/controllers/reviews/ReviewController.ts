import { Request, Response, NextFunction } from "express";
import { ReviewService } from "../../services/ReviewService";
import { ReviewResponseDTO } from "../../dto/ReviewResponseDTO";

export class ReviewController {
  private service = new ReviewService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(new ReviewResponseDTO(result));
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.findAll();
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}