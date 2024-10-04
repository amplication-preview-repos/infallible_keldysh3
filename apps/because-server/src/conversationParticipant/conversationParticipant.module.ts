import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationParticipantModuleBase } from "./base/conversationParticipant.module.base";
import { ConversationParticipantService } from "./conversationParticipant.service";
import { ConversationParticipantController } from "./conversationParticipant.controller";
import { ConversationParticipantResolver } from "./conversationParticipant.resolver";

@Module({
  imports: [ConversationParticipantModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConversationParticipantController],
  providers: [ConversationParticipantService, ConversationParticipantResolver],
  exports: [ConversationParticipantService],
})
export class ConversationParticipantModule {}
