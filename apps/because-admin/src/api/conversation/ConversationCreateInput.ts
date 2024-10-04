import { ConversationParticipantCreateNestedManyWithoutConversationsInput } from "./ConversationParticipantCreateNestedManyWithoutConversationsInput";
import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  conversationParticipants?: ConversationParticipantCreateNestedManyWithoutConversationsInput;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  startedAt?: Date | null;
  title?: string | null;
};
