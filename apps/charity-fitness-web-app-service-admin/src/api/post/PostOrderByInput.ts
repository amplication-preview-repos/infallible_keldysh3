import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
