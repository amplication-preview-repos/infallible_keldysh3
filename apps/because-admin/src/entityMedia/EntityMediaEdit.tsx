import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const EntityMediaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
