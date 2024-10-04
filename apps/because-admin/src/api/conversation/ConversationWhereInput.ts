import { ConversationParticipantListRelationFilter } from "../conversationParticipant/ConversationParticipantListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConversationWhereInput = {
  conversationParticipants?: ConversationParticipantListRelationFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  startedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
