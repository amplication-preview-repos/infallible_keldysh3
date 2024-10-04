import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const EntityMediaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="EntityID" source="entityId" />
        <SelectInput
          source="entityType"
          label="EntityType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="MediaURL" source="mediaUrl" />
      </SimpleForm>
    </Create>
  );
};
