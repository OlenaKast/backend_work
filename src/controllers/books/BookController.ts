import { Request, Response, NextFunction } from "express";
import { BookService } from "../../services/BookService";
import { BookResponseDTO } from "../../dto/BookResponseDTO";

export class BookController {
  private service = new BookService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(new BookResponseDTO(result)); 
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await this.service.findAll();
      const dtos = results.map(book => new BookResponseDTO(book));
      res.status(200).json(dtos);
    } catch (error) {
      next(error);
    }
  }
}