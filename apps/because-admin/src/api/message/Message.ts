import { JsonValue } from "type-fest";
import { Conversation } from "../conversation/Conversation";

export type Message = {
  attachments: JsonValue;
  content: string | null;
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  senderUser: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
