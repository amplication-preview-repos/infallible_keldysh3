import { VenueWhereInput } from "./VenueWhereInput";
import { VenueOrderByInput } from "./VenueOrderByInput";

export type VenueFindManyArgs = {
  where?: VenueWhereInput;
  orderBy?: Array<VenueOrderByInput>;
  skip?: number;
  take?: number;
};
