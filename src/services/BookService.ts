import { getRepository } from "typeorm";
import { Book } from "../orm/entities/users/Book";  
import { Author } from "../orm/entities/users/Author";
import { Genre } from "../orm/entities/users/Genre"
import { Script } from "../orm/entities/users/Script";

export class BookService {
  async create(data: any) {
    const bookRepo = getRepository(Book);
    const authorRepo = getRepository(Author);
    const genreRepo = getRepository(Genre);
    const scriptRepo = getRepository(Script);

    const author = await authorRepo.findOne({ where: { id: data.authorId } });
    if (!author) {
      throw new Error("Author not found");
    }

    let genre = null;
    if (data.genreId) {
      genre = await genreRepo.findOne({ where: { id: data.genreId } });
      if (!genre) console.log("Genre not found, creating book without genre");
    }

    let script = null;
    if (data.scriptId) {
      script = await scriptRepo.findOne({ where: { id: data.scriptId } });
      if (!script) console.log("Script not found, creating book without script");
    }

    const book = bookRepo.create({
      title: data.title,
      isbn: data.isbn,
      year: data.year,
      price: data.price,
      status: data.status || 'опубліковано',
      pages: data.pages,
      author: author, 
      genre: genre,
      script: script,
      authorId: author.id,
      genreId: genre.id,
      scriptId: script.id
    });

    return await bookRepo.save(book);
  }

  async findAll() {
    const bookRepo = getRepository(Book);
    return await bookRepo.find({
      relations: ['author', 'genre', 'script'] 
    });
  }
}