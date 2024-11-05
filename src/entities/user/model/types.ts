export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "user" | "admin";
  createdAt: string;
}

export interface UserState {
  data: User | null;
  status: Status;
  error: string | null;
}
