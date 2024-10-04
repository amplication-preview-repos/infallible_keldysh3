import { ConversationParticipantWhereInput } from "./ConversationParticipantWhereInput";
import { ConversationParticipantOrderByInput } from "./ConversationParticipantOrderByInput";

export type ConversationParticipantFindManyArgs = {
  where?: ConversationParticipantWhereInput;
  orderBy?: Array<ConversationParticipantOrderByInput>;
  skip?: number;
  take?: number;
};
