import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationParticipantCreateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
