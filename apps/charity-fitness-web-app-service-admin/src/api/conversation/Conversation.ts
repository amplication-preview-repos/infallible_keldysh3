import { ConversationParticipant } from "../conversationParticipant/ConversationParticipant";
import { Message } from "../message/Message";

export type Conversation = {
  conversationParticipants?: Array<ConversationParticipant>;
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  startedAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
