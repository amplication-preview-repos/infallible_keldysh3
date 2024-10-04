import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { BookingCreateNestedManyWithoutSessionsInput } from "./BookingCreateNestedManyWithoutSessionsInput";
import { TransactionCreateNestedManyWithoutSessionsInput } from "./TransactionCreateNestedManyWithoutSessionsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type SessionCreateInput = {
  activity?: ActivityWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutSessionsInput;
  coach?: string | null;
  date?: Date | null;
  dayOfWeek?: "Option1" | null;
  endTime?: Date | null;
  maxParticipants?: number | null;
  startTime?: Date | null;
  status?: "Option1" | null;
  transactions?: TransactionCreateNestedManyWithoutSessionsInput;
  venue?: VenueWhereUniqueInput | null;
};
