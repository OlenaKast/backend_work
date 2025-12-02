import { getRepository } from "typeorm";
import { Employee } from "../orm/entities/users/Employee";

export class EmployeeService {
  async create(data: any) {
    const employeeRepo = getRepository(Employee);
    const employee = employeeRepo.create(data);
    return await employeeRepo.save(employee);
  }

  async findAll() {
    const employeeRepo = getRepository(Employee);
    return await employeeRepo.find({
      relations: ['scriptAssignments'] 
    });
  }
}