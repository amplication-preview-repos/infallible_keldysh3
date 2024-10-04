import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  date?: Date | null;
  session?: SessionWhereUniqueInput | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
