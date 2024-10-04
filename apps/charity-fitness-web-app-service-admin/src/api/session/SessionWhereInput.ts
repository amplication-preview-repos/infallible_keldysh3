import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type SessionWhereInput = {
  activity?: ActivityWhereUniqueInput;
  bookings?: BookingListRelationFilter;
  coach?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  dayOfWeek?: "Option1";
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  maxParticipants?: IntNullableFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
  transactions?: TransactionListRelationFilter;
  venue?: VenueWhereUniqueInput;
};
