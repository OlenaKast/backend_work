import { getRepository } from "typeorm";
import { ScriptEmployee } from "../orm/entities/users/ScriptEmployee";
import { Script } from "../orm/entities/users/Script";
import { Employee } from "../orm/entities/users/Employee";
import { ScriptRole } from "../orm/enums";

export class ScriptEmployeeService {

  async create(data: { scriptId: number; employeeId: number; role: ScriptRole; comment?: string }) {
    const repo = getRepository(ScriptEmployee);
    const scriptRepo = getRepository(Script);
    const employeeRepo = getRepository(Employee);

    const script = await scriptRepo.findOne({ where: { id: data.scriptId } });
    if (!script) throw new Error("Script not found");

    const employee = await employeeRepo.findOne({ where: { id: data.employeeId } });
    if (!employee) throw new Error("Employee not found");

    const assignment = repo.create({
      role: data.role,
      comment: data.comment,
      script: script,
      employee: employee
    });

    return await repo.save(assignment);
  }

  async findAll() {
    const repo = getRepository(ScriptEmployee);
    return await repo.find({
      relations: ['script', 'employee']
    });
  }
}