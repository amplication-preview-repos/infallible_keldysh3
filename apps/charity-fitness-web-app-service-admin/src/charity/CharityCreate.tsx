import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CharityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Email" source="email" type="email" />
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <NumberInput label="SuggestedDonation" source="suggestedDonation" />
        <TextInput label="WebsiteURL" source="websiteUrl" />
      </SimpleForm>
    </Create>
  );
};
