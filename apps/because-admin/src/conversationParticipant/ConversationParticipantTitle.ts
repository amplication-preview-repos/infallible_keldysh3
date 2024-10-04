import { ConversationParticipant as TConversationParticipant } from "../api/conversationParticipant/ConversationParticipant";

export const CONVERSATIONPARTICIPANT_TITLE_FIELD = "id";

export const ConversationParticipantTitle = (
  record: TConversationParticipant
): string => {
  return record.id?.toString() || String(record.id);
};
