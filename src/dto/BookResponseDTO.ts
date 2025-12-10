import { Book } from "../orm/entities/users/Book";

export class BookResponseDTO {
  id: number;
  title: string;
  price: string;
  authorName: string;

  constructor(book: Book) {
    this.id = book.id;
    this.title = book.title;
    this.price = `${book.price} UAH`;
    
    this.authorName = book.author ? book.author.fullName : "Unknown";
  }
}