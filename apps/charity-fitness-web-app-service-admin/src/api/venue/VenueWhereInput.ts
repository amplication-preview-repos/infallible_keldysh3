import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type VenueWhereInput = {
  activities?: ActivityListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
};
