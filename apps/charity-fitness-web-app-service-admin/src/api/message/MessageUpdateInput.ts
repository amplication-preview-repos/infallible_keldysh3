import { InputJsonValue } from "../../types";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageUpdateInput = {
  attachments?: InputJsonValue;
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  sender?: string | null;
  senderUser?: string | null;
  sentAt?: Date | null;
};
