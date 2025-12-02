import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Author } from "./Author";
import { Book } from "./Book";

export enum ScriptStatus {
  DRAFT = 'чернетка',
  APPROVED = 'схвалено',
  REJECTED = 'відхилено',
  REVISION = 'доопрацювання'
}

@Entity('scripts')
export class Script {
  @PrimaryGeneratedColumn({ name: 'id_script' })
  id: number;

  @Column({ name: 'name_script', length: 50 })
  name: string;

  @Column({ name: 'description_script', length: 1500 })
  description: string;

  @CreateDateColumn({ name: 'date_script' })
  date: Date;

  @Column({ name: 'file_script', length: 255 })
  file: string;

  @Column({
    name: 'status_script',
    type: 'enum',
    enum: ScriptStatus,
    default: ScriptStatus.DRAFT
  })
  status: ScriptStatus;

  @ManyToOne(() => Author, (author) => author.scripts)
  @JoinColumn({ name: 'id_author' })
  author: Author;

  @Column({ name: 'id_author' })
  authorId: number;

  @OneToOne(() => Book, (book) => book.script)
  book: Book;
}