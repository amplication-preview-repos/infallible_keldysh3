import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sessionId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
