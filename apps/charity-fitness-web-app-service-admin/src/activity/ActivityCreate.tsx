import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";
import { VenueTitle } from "../venue/VenueTitle";

export const ActivityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Coach" source="coach" />
        <TextInput label="Description" multiline source="description" />
        <div />
        <BooleanInput label="IsDeleted" source="isDeleted" />
        <NumberInput step={1} label="MaxParticipant" source="maxParticipant" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="sessions" reference="Session">
          <SelectArrayInput
            optionText={SessionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="venue.id" reference="Venue" label="Venue">
          <SelectInput optionText={VenueTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
