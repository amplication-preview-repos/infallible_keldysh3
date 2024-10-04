import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EntityMediaWhereInput = {
  entityId?: IntNullableFilter;
  entityType?: "Option1";
  id?: StringFilter;
  mediaUrl?: StringNullableFilter;
};
