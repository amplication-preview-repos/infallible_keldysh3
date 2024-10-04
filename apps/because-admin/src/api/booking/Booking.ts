import { Session } from "../session/Session";
import { User } from "../user/User";

export type Booking = {
  createdAt: Date;
  id: string;
  session?: Session | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
