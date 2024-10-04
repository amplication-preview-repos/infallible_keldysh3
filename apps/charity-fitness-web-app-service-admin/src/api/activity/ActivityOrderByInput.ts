import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  coach?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  isDeleted?: SortOrder;
  maxParticipant?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  venueId?: SortOrder;
};
