import { Role } from "@prisma/client";

export interface User {
  email: string;
  password: string | null;
  name: string | null;
  agreedToTerms: boolean;
  id: string;
  emailVerified: Date | null;
  // emailVerified: string | null;
  image: string | null;
  role: Role;
  createdAt: Date;
  // createdAt: string;
  updatedAt: Date;
  // updatedAt: string;
  requestToken: string | null;
  accessToken: string | null;
}

export type Status = "active" | "inactive" | "pending";

export interface UserState {
  data: User | null;
  status: Status;
  error: string | null;
}
