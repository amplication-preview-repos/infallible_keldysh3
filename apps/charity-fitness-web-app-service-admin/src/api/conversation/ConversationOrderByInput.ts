import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  startedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
