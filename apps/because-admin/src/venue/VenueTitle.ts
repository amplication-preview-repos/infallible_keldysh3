import { Venue as TVenue } from "../api/venue/Venue";

export const VENUE_TITLE_FIELD = "name";

export const VenueTitle = (record: TVenue): string => {
  return record.name?.toString() || String(record.id);
};
