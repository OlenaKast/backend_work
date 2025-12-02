import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Author } from "./Author";
import { Genre } from "./Genre";
import { Script } from "./Script";

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

  @Column({ name: 'status_book', length: 20 })
  status: string;

  @Column({ name: 'pages_number_book', nullable: true })
  pages: number;

  @ManyToOne(() => Author, (author) => author.books)
  @JoinColumn({ name: 'authorId' })
  author: Author;

  @Column()
  authorId: number;

  @ManyToOne(() => Genre, (genre) => genre.books)
  @JoinColumn({ name: 'genreId' })
  genre: Genre;

  @OneToOne(() => Script, (script) => script.book)
  @JoinColumn({ name: 'id_script' })
  script: Script;

  @Column({ name: 'id_script', nullable: true })
  scriptId: number;

  @Column({ nullable: true })
  genreId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}