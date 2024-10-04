import { JsonValue } from "type-fest";

export type Charity = {
  address: string | null;
  createdAt: Date;
  description: string | null;
  email: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  phone: string | null;
  suggestedDonation: number | null;
  updatedAt: Date;
  websiteUrl: string | null;
};
