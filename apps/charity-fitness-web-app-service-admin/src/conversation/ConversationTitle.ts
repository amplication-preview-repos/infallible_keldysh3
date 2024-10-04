import { Conversation as TConversation } from "../api/conversation/Conversation";

export const CONVERSATION_TITLE_FIELD = "title";

export const ConversationTitle = (record: TConversation): string => {
  return record.title?.toString() || String(record.id);
};
