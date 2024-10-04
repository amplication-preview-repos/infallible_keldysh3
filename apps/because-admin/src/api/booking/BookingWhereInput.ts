import { StringFilter } from "../../util/StringFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  session?: SessionWhereUniqueInput;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
