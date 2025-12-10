import { Request, Response, NextFunction } from "express";
import { UserService } from "../../services/UserService";
import { UserResponseDTO } from "../../dto/UserResponseDTO"; 

export class UserController {
  private service = new UserService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.create(req.body);
      res.status(201).json(new UserResponseDTO(user)); 
    } catch (error) 
    { next(error); }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.findAll();
      res.json(users.map(u => new UserResponseDTO(u)));
    } catch (error) { next(error); }
  }
}