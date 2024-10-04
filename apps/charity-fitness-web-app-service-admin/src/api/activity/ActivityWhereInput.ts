import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type ActivityWhereInput = {
  coach?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  isDeleted?: BooleanNullableFilter;
  maxParticipant?: IntNullableFilter;
  name?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  status?: "Option1";
  venue?: VenueWhereUniqueInput;
};
