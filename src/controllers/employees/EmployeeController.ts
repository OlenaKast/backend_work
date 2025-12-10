import { Request, Response, NextFunction } from "express";
import { EmployeeService } from "../../services/EmployeeService";
import { EmployeeResponseDTO } from "../../dto/EmployeeResponseDTO";

export class EmployeeController {
  private service = new EmployeeService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(new EmployeeResponseDTO(result));
    } catch (error) { next(error); }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.findAll();
      res.json(result);
    } catch (error) { next(error); }
  }
}