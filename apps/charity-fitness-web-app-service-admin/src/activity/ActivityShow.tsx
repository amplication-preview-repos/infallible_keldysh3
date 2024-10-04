import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACTIVITY_TITLE_FIELD } from "./ActivityTitle";
import { VENUE_TITLE_FIELD } from "../venue/VenueTitle";

export const ActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Session"
          target="activityId"
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
