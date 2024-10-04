import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  session?: SessionWhereUniqueInput;
  status?: "Option1";
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
