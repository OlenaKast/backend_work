import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Author } from "./Author";
import { Genre } from "./Genre";

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 13 })
  isbn: string;

  @Column()
  year: number;

  @Column('decimal', { precision: 8, scale: 2, nullable: true })
  price: number;

  @ManyToOne(() => Author, (author) => author.books)
  @JoinColumn({ name: 'authorId' })
  author: Author;

  @Column()
  authorId: number;

  @ManyToOne(() => Genre, (genre) => genre.books)
  @JoinColumn({ name: 'genreId' })
  genre: Genre;

  @Column({ nullable: true })
  genreId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}