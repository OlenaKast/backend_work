import { getRepository } from "typeorm"; 
import { Author } from "../orm/entities/users/Author";

export class AuthorService {

  async create(data: any) {
    const authorRepo = getRepository(Author);
    const author = authorRepo.create(data);
    return await authorRepo.save(author);
  }

  async findAll() {
    const authorRepo = getRepository(Author);
    return await authorRepo.find({
      relations: ['books', 'scripts']
    });
  }
}