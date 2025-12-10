import { User } from "../orm/entities/users/User";

export class UserResponseDTO {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;

  constructor(user: User) {
    this.id = user.id;
    this.fullName = user.fullName;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
  }
}