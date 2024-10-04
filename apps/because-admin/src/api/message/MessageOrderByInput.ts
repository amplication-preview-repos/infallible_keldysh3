import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  attachments?: SortOrder;
  content?: SortOrder;
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sender?: SortOrder;
  senderUser?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
