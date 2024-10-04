import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "coach";

export const SessionTitle = (record: TSession): string => {
  return record.coach?.toString() || String(record.id);
};
