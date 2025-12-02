import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Book } from "./Book";

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 2, scale: 1 }) 
  rating: number;

  @Column('text')
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @ManyToOne(() => Book, (book) => book.reviews)
  book: Book;
}