import { JsonValue } from "type-fest";
import { Session } from "../session/Session";
import { Venue } from "../venue/Venue";

export type Activity = {
  coach: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  isDeleted: boolean | null;
  maxParticipant: number | null;
  name: string | null;
  sessions?: Array<Session>;
  status?: "Option1" | null;
  updatedAt: Date;
  venue?: Venue | null;
};
