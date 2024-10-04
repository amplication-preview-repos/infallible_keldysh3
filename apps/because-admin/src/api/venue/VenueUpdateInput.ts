import { ActivityUpdateManyWithoutVenuesInput } from "./ActivityUpdateManyWithoutVenuesInput";
import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutVenuesInput } from "./SessionUpdateManyWithoutVenuesInput";

export type VenueUpdateInput = {
  activities?: ActivityUpdateManyWithoutVenuesInput;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  sessions?: SessionUpdateManyWithoutVenuesInput;
};
