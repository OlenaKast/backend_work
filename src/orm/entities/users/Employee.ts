import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn({ name: 'id_employee' })
  id: number;

  @Column({ name: 'fullname_employee', length: 100 })
  fullName: string;

  @Column({ name: 'post_employee', length: 30 })
  post: string;

  @Column({ name: 'phone_employee', length: 10 })
  phone: string;

  @Column({ name: 'email_employee', length: 254 })
  email: string;

  @Column({ name: 'date_hire_employee' })
  dateHire: Date;
}