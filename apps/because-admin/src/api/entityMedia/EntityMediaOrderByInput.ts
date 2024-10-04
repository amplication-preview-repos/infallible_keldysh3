import { SortOrder } from "../../util/SortOrder";

export type EntityMediaOrderByInput = {
  createdAt?: SortOrder;
  entityId?: SortOrder;
  entityType?: SortOrder;
  id?: SortOrder;
  mediaUrl?: SortOrder;
  updatedAt?: SortOrder;
};
