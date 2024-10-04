import { Booking } from "../booking/Booking";
import { ConversationParticipant } from "../conversationParticipant/ConversationParticipant";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  bookings?: Array<Booking>;
  conversationParticipants?: Array<ConversationParticipant>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
