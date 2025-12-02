import { Request, Response, NextFunction } from "express";
import { ScriptEmployeeService } from "../../services/ScriptEmployeeService";

export class ScriptEmployeeController {
  private service = new ScriptEmployeeService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (error) { next(error); }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.findAll();
      res.json(result);
    } catch (error) { next(error); }
  }
}