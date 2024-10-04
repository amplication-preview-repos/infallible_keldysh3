import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ActivityTitle } from "../activity/ActivityTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { VenueTitle } from "../venue/VenueTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="activity.id"
          reference="Activity"
          label="Activity"
        >
          <SelectInput optionText={ActivityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="bookings" reference="Booking">
          <SelectArrayInput
            optionText={BookingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Coach" source="coach" />
        <DateTimeInput label="Date" source="date" />
        <SelectInput
          source="dayOfWeek"
          label="DayOfWeek"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="EndTime" source="endTime" />
        <NumberInput
          step={1}
          label="MaxParticipants"
          source="maxParticipants"
        />
        <DateTimeInput label="StartTime" source="startTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="venue.id" reference="Venue" label="Venue">
          <SelectInput optionText={VenueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
