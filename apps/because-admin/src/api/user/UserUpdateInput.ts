import { BookingUpdateManyWithoutUsersInput } from "./BookingUpdateManyWithoutUsersInput";
import { ConversationParticipantUpdateManyWithoutUsersInput } from "./ConversationParticipantUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bookings?: BookingUpdateManyWithoutUsersInput;
  conversationParticipants?: ConversationParticipantUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
};
