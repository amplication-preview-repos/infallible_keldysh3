import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CONVERSATION_TITLE_FIELD } from "../conversation/ConversationTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
