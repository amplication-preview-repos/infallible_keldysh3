import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { VENUE_TITLE_FIELD } from "./VenueTitle";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";

export const VenueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Activity"
          target="venueId"
          label="Activities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Coach" source="coach" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <BooleanField label="IsDeleted" source="isDeleted" />
            <TextField label="MaxParticipant" source="maxParticipant" />
            <TextField label="Name" source="name" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Venue" source="venue.id" reference="Venue">
              <TextField source={VENUE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="venueId"
          label="Sessions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
