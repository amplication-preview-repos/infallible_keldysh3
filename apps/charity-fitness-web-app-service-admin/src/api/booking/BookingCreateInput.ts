import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  session?: SessionWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
