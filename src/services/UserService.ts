import { getRepository } from "typeorm";
import { User } from "../orm/entities/users/User";

export class UserService {

  async create(data: any): Promise<User> {  
    const userRepo = getRepository(User);
    const user = userRepo.create(data as User);
    return await userRepo.save(user);
}

  async findAll() {
    const userRepo = getRepository(User);
    return await userRepo.find({
      relations: ['orders']
    });
  }
  
  async findOne(id: number) {
    const userRepo = getRepository(User);
      return await userRepo.findOne({ where: { id } });
  }
}