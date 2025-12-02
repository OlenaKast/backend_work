import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Employee } from "./Employee";
import { Script } from "./Script";
import { ScriptRole } from "../../enums";

@Entity('script_employees')
export class ScriptEmployee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ScriptRole,
    default: ScriptRole.EDITOR
  })
  role: ScriptRole;

  @Column({ nullable: true })
  comment: string;

  @ManyToOne(() => Script, (script) => script.employeeAssignments)
  @JoinColumn({ name: 'scriptId' })
  script: Script;

  @Column()
  scriptId: number;

  @ManyToOne(() => Employee, (employee) => employee.scriptAssignments)
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @Column()
  employeeId: number;
}