import { getRepository } from "typeorm";
import { Order } from "../orm/entities/users/Order";
import { OrderBook } from "../orm/entities/users/OrderBook";
import { User } from "../orm/entities/users/User";
import { Book } from "../orm/entities/users/Book";
import { OrderType, OrderStatus } from "../orm/enums";

export class OrderService {

  async create(data: { userId: number; type: OrderType; items: { bookId: number; quantity: number }[] }) {
    const orderRepo = getRepository(Order);
    const orderBookRepo = getRepository(OrderBook);
    const userRepo = getRepository(User);
    const bookRepo = getRepository(Book);
    const user = await userRepo.findOne({ where: { id: data.userId } });
    if (!user) throw new Error("User not found");

    const order = orderRepo.create({
      user: user,
      type: data.type,
      status: OrderStatus.UNPAID
    });
    const savedOrder = await orderRepo.save(order);

    for (const item of data.items) {
      const book = await bookRepo.findOne({ where: { id: item.bookId } });
      if (!book) continue; 

      const orderBook = orderBookRepo.create({
        order: savedOrder,
        book: book,
        quantity: item.quantity,
        fixedPrice: book.price 
      });
      await orderBookRepo.save(orderBook);
    }

    return await orderRepo.findOne({
      where: { id: savedOrder.id },
      relations: ['items', 'items.book'] 
    });
  }

  async findAll() {
    const orderRepo = getRepository(Order);
    return await orderRepo.find({
      relations: ['user', 'items', 'items.book']
    });
  }
}