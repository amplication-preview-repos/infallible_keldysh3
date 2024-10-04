import { ActivityCreateNestedManyWithoutVenuesInput } from "./ActivityCreateNestedManyWithoutVenuesInput";
import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutVenuesInput } from "./SessionCreateNestedManyWithoutVenuesInput";

export type VenueCreateInput = {
  activities?: ActivityCreateNestedManyWithoutVenuesInput;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  sessions?: SessionCreateNestedManyWithoutVenuesInput;
};
