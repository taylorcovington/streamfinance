export interface IUser {
  id: string;
  email: string;
  name?: string;
  role: Role;
}

export type Role = "USER" | "ADMIN";
