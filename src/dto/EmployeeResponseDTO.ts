import { Employee } from "../orm/entities/users/Employee";

export class EmployeeResponseDTO {
  id: number;
  fullName: string;
  post: string;
  email: string;

  constructor(employee: Employee) {
    this.id = employee.id;
    this.fullName = employee.fullName;
    this.post = employee.post;
    this.email = employee.email;
  }
}