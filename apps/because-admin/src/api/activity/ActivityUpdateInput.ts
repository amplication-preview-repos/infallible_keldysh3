import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutActivitiesInput } from "./SessionUpdateManyWithoutActivitiesInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type ActivityUpdateInput = {
  coach?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  isDeleted?: boolean | null;
  maxParticipant?: number | null;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutActivitiesInput;
  status?: "Option1" | null;
  venue?: VenueWhereUniqueInput | null;
};
