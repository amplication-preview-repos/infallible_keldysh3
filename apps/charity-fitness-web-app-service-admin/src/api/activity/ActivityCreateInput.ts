import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutActivitiesInput } from "./SessionCreateNestedManyWithoutActivitiesInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type ActivityCreateInput = {
  coach?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  isDeleted?: boolean | null;
  maxParticipant?: number | null;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutActivitiesInput;
  status?: "Option1" | null;
  venue?: VenueWhereUniqueInput | null;
};
