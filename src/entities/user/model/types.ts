import { Role } from "@prisma/client";

export interface User {
  id: string;
  email: string;
  name: string | null;
  avatar?: string;
  role: Role; //"user" | "admin";
  createdAt: string;
  requestToken: string | null;
}

export type Status = "active" | "inactive" | "pending";

export interface UserState {
  data: User | null;
  status: Status;
  error: string | null;
}
