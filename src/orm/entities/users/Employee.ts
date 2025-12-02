import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ScriptEmployee } from "./ScriptEmployee";
@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  fullName: string;

  @Column({ length: 50 })
  post: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @Column({ unique: true, length: 254 })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'date', nullable: true })
  dateHire: Date;

  @Column({ length: 100, nullable: true })
  unit: string;

  @OneToMany(() => ScriptEmployee, se => se.employee)
  scriptAssignments: ScriptEmployee[];

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}