import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Order } from "./Order";
import { Review } from "./Review";
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  fullName: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @Column({ unique: true, length: 254 })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => Review, review => review.user)
  reviews: Review[];

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}