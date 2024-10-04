import { ActivityWhereUniqueInput } from "../activity/ActivityWhereUniqueInput";
import { BookingUpdateManyWithoutSessionsInput } from "./BookingUpdateManyWithoutSessionsInput";
import { TransactionUpdateManyWithoutSessionsInput } from "./TransactionUpdateManyWithoutSessionsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type SessionUpdateInput = {
  activity?: ActivityWhereUniqueInput | null;
  bookings?: BookingUpdateManyWithoutSessionsInput;
  coach?: string | null;
  date?: Date | null;
  dayOfWeek?: "Option1" | null;
  endTime?: Date | null;
  maxParticipants?: number | null;
  startTime?: Date | null;
  status?: "Option1" | null;
  transactions?: TransactionUpdateManyWithoutSessionsInput;
  venue?: VenueWhereUniqueInput | null;
};
