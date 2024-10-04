import { ConversationParticipantUpdateManyWithoutConversationsInput } from "./ConversationParticipantUpdateManyWithoutConversationsInput";
import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  conversationParticipants?: ConversationParticipantUpdateManyWithoutConversationsInput;
  messages?: MessageUpdateManyWithoutConversationsInput;
  startedAt?: Date | null;
  title?: string | null;
};
