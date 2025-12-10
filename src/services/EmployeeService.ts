import { getRepository } from "typeorm";
import { Employee } from "../orm/entities/users/Employee";

export class EmployeeService {
  async create(data: any): Promise<Employee> { 
    const employeeRepo = getRepository(Employee);
    const newEmployee = employeeRepo.create(data as Employee);
    return await employeeRepo.save(newEmployee);
}

  async findAll() {
    const employeeRepo = getRepository(Employee);
    return await employeeRepo.find({
      relations: ['scriptAssignments'] 
    });
  }
}