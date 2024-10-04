import { VenueWhereUniqueInput } from "./VenueWhereUniqueInput";
import { VenueUpdateInput } from "./VenueUpdateInput";

export type UpdateVenueArgs = {
  where: VenueWhereUniqueInput;
  data: VenueUpdateInput;
};
