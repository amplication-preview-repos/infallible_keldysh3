import { SortOrder } from "../../util/SortOrder";

export type ConversationParticipantOrderByInput = {
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
