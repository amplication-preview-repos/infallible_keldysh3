import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversationParticipantServiceBase } from "./base/conversationParticipant.service.base";

@Injectable()
export class ConversationParticipantService extends ConversationParticipantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
