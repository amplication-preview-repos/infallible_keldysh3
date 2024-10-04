import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  activityId?: SortOrder;
  coach?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  dayOfWeek?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  maxParticipants?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  venueId?: SortOrder;
};
