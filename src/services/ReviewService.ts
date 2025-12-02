import { getRepository } from "typeorm";
import { Review } from "../orm/entities/users/Review"; 
import { User } from "../orm/entities/users/User";
import { Book } from "../orm/entities/users//Book";

export class ReviewService {
  async create(data: { userId: number; bookId: number; rating: number; text: string }) {
    const reviewRepo = getRepository(Review);
    const userRepo = getRepository(User);
    const bookRepo = getRepository(Book);

    const user = await userRepo.findOne({ where: { id: data.userId } });
    if (!user) throw new Error("User not found");

    const book = await bookRepo.findOne({ where: { id: data.bookId } });
    if (!book) throw new Error("Book not found");

    const review = reviewRepo.create({
      rating: data.rating,
      text: data.text,
      user: user,
      book: book
    });

    return await reviewRepo.save(review);
  }

  async findAll() {
    const reviewRepo = getRepository(Review);
    return await reviewRepo.find({
      relations: ['user', 'book']
    });
  }
}