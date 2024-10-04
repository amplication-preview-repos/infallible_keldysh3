import { Activity } from "../activity/Activity";
import { Booking } from "../booking/Booking";
import { Transaction } from "../transaction/Transaction";
import { Venue } from "../venue/Venue";

export type Session = {
  activity?: Activity | null;
  bookings?: Array<Booking>;
  coach: string | null;
  createdAt: Date;
  date: Date | null;
  dayOfWeek?: "Option1" | null;
  endTime: Date | null;
  id: string;
  maxParticipants: number | null;
  startTime: Date | null;
  status?: "Option1" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  venue?: Venue | null;
};
