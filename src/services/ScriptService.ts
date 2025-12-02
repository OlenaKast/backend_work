import { getRepository } from "typeorm";
import { Script } from "../orm/entities/users/Script";
import { Author } from "../orm/entities/users/Author";

export class ScriptService {
  async create(data: any) {
    const scriptRepo = getRepository(Script);
    const authorRepo = getRepository(Author);

    const author = await authorRepo.findOne({ where: { id: data.authorId } });
    if (!author) throw new Error("Author not found");

    const script = scriptRepo.create({
      ...data,
      author: author
    });
    return await scriptRepo.save(script);
  }

  async findAll() {
    const scriptRepo = getRepository(Script);
    return await scriptRepo.find({ relations: ['author'] });
  }
}