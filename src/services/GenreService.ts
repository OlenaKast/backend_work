import { getRepository } from "typeorm";
import { Genre } from "../orm/entities/users/Genre";

export class GenreService {
  async create(data: { name: string; description?: string }) {
    const genreRepo = getRepository(Genre);
    const genre = genreRepo.create(data);
    return await genreRepo.save(genre);
  }

  async findAll() {
    const genreRepo = getRepository(Genre);
    return await genreRepo.find();
  }
}