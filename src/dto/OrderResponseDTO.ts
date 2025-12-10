import { Order } from "../orm/entities/users/Order";

export class OrderResponseDTO {
  id: number;
  status: string;
  totalBooks: number;
  items: any[]; 

  constructor(order: Order) {
    this.id = order.id;
    this.status = order.status;
    this.totalBooks = order.items ? order.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
    
    this.items = order.items ? order.items.map(i => ({
      bookTitle: i.book ? i.book.title : 'Unknown',
      quantity: i.quantity,
      price: i.fixedPrice
    })) : [];
  }
}