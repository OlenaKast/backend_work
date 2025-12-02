import { getRepository } from "typeorm";
import { Book } from "../orm/entities/users/Book";
import { Author } from "../orm/entities/users/Author";

export class BookService {
  async create(data: { title: string; isbn: string; year: number; price: number; authorId: number }) {
    const bookRepo = getRepository(Book);
    const authorRepo = getRepository(Author);

 
    const author = await authorRepo.findOne({ where: { id: data.authorId } });
    
    if (!author) {
      throw new Error("Author not found");
    }

    const book = bookRepo.create({
      title: data.title,
      isbn: data.isbn,
      year: data.year,
      price: data.price,
      author: author, 
      authorId: author.id
    });

    return await bookRepo.save(book);
  }

  async findAll() {
    const bookRepo = getRepository(Book);
    return await bookRepo.find({
      relations: ['author'] 
    });
  }
}