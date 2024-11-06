export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "user" | "admin";
  createdAt: string;
}

export type Status = "active" | "inactive" | "pending";

export interface UserState {
  data: User | null;
  status: Status;
  error: string | null;
}
