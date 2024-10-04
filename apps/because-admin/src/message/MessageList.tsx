import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONVERSATION_TITLE_FIELD } from "../conversation/ConversationTitle";

export const MessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Messages"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
