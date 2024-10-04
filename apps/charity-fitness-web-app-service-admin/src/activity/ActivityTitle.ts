import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "name";

export const ActivityTitle = (record: TActivity): string => {
  return record.name?.toString() || String(record.id);
};
