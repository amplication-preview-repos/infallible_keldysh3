import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONVERSATION_TITLE_FIELD } from "./ConversationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ConversationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="StartedAt" source="startedAt" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ConversationParticipant"
          target="conversationId"
          label="ConversationParticipants"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Conversation"
              source="conversation.id"
              reference="Conversation"
            >
              <TextField source={CONVERSATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="conversationId"
          label="Messages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Attachments" source="attachments" />
            <TextField label="Content" source="content" />
            <ReferenceField
              label="Conversation"
              source="conversation.id"
              reference="Conversation"
            >
              <TextField source={CONVERSATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Sender" source="sender" />
            <TextField label="SenderUser" source="senderUser" />
            <TextField label="SentAt" source="sentAt" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
