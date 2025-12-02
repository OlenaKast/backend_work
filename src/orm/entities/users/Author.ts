import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Book } from "./Book";
import { Script } from "./Script";

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn({ name: 'id_author' })
  id: number;

  @Column({ name: 'fullname_author', length: 100 })
  fullName: string;

  @Column({ name: 'email_author', length: 254 })
  email: string;

  @Column({ name: 'password_author', length: 60 })
  password: string;

  @Column({ name: 'birth_author', type: 'date' })
  birthDate: Date;

  @Column({ name: 'biography_author', length: 500, nullable: true })
  biography: string;

  @Column({ name: 'country_author', length: 100, nullable: true })
  country: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
  @OneToMany(() => Script, (script) => script.author)
  scripts: Script[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}