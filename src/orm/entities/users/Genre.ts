import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Book } from "./Book";

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn({ name: 'id_genre' })
  id: number;

  @Column({ name: 'name_genre', length: 30 })
  name: string;

  @Column({ name: 'description_genre', length: 200, nullable: true })
  description: string;

  @OneToMany(() => Book, (book) => book.genre)
  books: Book[];
}