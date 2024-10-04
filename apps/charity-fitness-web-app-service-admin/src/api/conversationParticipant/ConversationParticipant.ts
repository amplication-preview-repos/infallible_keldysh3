import { Conversation } from "../conversation/Conversation";
import { User } from "../user/User";

export type ConversationParticipant = {
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
