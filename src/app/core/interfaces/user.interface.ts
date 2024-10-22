export interface User {
  uuid: string;
  userName: string;
  email: string;
  isActive: boolean;
  role: Role[];
}

export interface Role {
  uuid: string;
  name: string;
  description: string;
}
