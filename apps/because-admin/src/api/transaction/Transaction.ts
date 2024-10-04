import { Session } from "../session/Session";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  session?: Session | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
