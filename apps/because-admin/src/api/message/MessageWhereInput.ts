import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  attachments?: JsonFilter;
  content?: StringNullableFilter;
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  sender?: StringNullableFilter;
  senderUser?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
};
