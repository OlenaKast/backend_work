import { Request, Response, NextFunction } from "express";
import { OrderService } from "../../services/OrderService";
import { OrderResponseDTO } from "../../dto/OrderResponseDTO";
export class OrderController {
  private service = new OrderService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(new OrderResponseDTO(result));
    } catch (error) { next(error); }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.findAll();
      res.json(result);
    } catch (error) { next(error); }
  }
}