import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { OrderBook } from "./OrderBook";
import { OrderStatus, OrderType } from "../../enums";

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: OrderType,
    default: OrderType.RETAIL
  })
  type: OrderType;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.UNPAID
  })
  status: OrderStatus;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @OneToMany(() => OrderBook, (orderBook) => orderBook.order)
  items: OrderBook[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}