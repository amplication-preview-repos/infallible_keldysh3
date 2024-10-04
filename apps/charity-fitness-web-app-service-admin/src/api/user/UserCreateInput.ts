import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";
import { ConversationParticipantCreateNestedManyWithoutUsersInput } from "./ConversationParticipantCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bookings?: BookingCreateNestedManyWithoutUsersInput;
  conversationParticipants?: ConversationParticipantCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
