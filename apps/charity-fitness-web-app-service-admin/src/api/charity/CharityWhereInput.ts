import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CharityWhereInput = {
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  suggestedDonation?: FloatNullableFilter;
  websiteUrl?: StringNullableFilter;
};
