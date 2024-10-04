import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SESSION_TITLE_FIELD } from "./SessionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";
import { VENUE_TITLE_FIELD } from "../venue/VenueTitle";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Activity"
          source="activity.id"
          reference="Activity"
        >
          <TextField source={ACTIVITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Coach" source="coach" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="DayOfWeek" source="dayOfWeek" />
        <TextField label="EndTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="MaxParticipants" source="maxParticipants" />
        <TextField label="StartTime" source="startTime" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Venue" source="venue.id" reference="Venue">
          <TextField source={VENUE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Booking"
          target="sessionId"
          label="Bookings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="sessionId"
          label="Transactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Session"
              source="session.id"
              reference="Session"
            >
              <TextField source={SESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
