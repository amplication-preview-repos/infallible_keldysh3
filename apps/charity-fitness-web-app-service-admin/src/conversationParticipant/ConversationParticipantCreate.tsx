import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ConversationTitle } from "../conversation/ConversationTitle";
import { UserTitle } from "../user/UserTitle";

export const ConversationParticipantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="conversation.id"
          reference="Conversation"
          label="Conversation"
        >
          <SelectInput optionText={ConversationTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
