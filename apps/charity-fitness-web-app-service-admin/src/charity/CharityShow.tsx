import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CharityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="SuggestedDonation" source="suggestedDonation" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WebsiteURL" source="websiteUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
