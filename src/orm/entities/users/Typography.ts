import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('typography')
export class Typography {
  @PrimaryGeneratedColumn({ name: 'id_typography' })
  id: number;

  @Column({ name: 'name_typography', length: 50 })
  name: string;

  @Column({ name: 'contact_typography', length: 100 })
  contact: string;

  @Column({ name: 'phone_typography', length: 10 })
  phone: string;

  @Column({ name: 'email_typography', length: 254 })
  email: string;
}