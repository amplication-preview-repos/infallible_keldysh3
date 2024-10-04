import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { ConversationParticipantListRelationFilter } from "../conversationParticipant/ConversationParticipantListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  bookings?: BookingListRelationFilter;
  conversationParticipants?: ConversationParticipantListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
