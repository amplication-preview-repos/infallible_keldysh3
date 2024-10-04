import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  body?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
