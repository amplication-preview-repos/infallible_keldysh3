import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ConversationParticipantTitle } from "../conversationParticipant/ConversationParticipantTitle";
import { MessageTitle } from "../message/MessageTitle";

export const ConversationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="conversationParticipants"
          reference="ConversationParticipant"
        >
          <SelectArrayInput
            optionText={ConversationParticipantTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="messages" reference="Message">
          <SelectArrayInput
            optionText={MessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="StartedAt" source="startedAt" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};