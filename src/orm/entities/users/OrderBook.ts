import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Order } from "./Order";
import { Book } from "./Book";

@Entity('order_books')
export class OrderBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column('decimal', { precision: 8, scale: 2 })
  fixedPrice: number;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @ManyToOne(() => Book, (book) => book.orders) 
  book: Book;
}