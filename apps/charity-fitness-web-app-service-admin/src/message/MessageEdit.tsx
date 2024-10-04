import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ConversationTitle } from "../conversation/ConversationTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Content" multiline source="content" />
        <ReferenceInput
          source="conversation.id"
          reference="Conversation"
          label="Conversation"
        >
          <SelectInput optionText={ConversationTitle} />
        </ReferenceInput>
        <TextInput label="Sender" source="sender" />
        <TextInput label="SenderUser" source="senderUser" />
        <DateTimeInput label="SentAt" source="sentAt" />
      </SimpleForm>
    </Edit>
  );
};
