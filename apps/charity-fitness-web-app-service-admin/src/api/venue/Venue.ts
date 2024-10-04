import { Activity } from "../activity/Activity";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type Venue = {
  activities?: Array<Activity>;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  sessions?: Array<Session>;
  updatedAt: Date;
};
