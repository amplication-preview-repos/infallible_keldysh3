import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";
import { VENUE_TITLE_FIELD } from "../venue/VenueTitle";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
