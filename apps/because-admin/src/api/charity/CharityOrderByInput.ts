import { SortOrder } from "../../util/SortOrder";

export type CharityOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  suggestedDonation?: SortOrder;
  updatedAt?: SortOrder;
  websiteUrl?: SortOrder;
};
