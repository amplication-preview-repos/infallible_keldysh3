import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationParticipantUpdateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
