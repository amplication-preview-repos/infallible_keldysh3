import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationParticipantWhereInput = {
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
