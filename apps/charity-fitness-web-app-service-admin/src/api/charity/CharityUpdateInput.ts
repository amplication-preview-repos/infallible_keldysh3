import { InputJsonValue } from "../../types";

export type CharityUpdateInput = {
  address?: string | null;
  description?: string | null;
  email?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  phone?: string | null;
  suggestedDonation?: number | null;
  websiteUrl?: string | null;
};