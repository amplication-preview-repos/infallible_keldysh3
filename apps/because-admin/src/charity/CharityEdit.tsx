import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CharityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
