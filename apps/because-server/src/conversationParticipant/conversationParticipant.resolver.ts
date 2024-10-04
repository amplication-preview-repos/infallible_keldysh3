import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ConversationParticipantResolverBase } from "./base/conversationParticipant.resolver.base";
import { ConversationParticipant } from "./base/ConversationParticipant";
import { ConversationParticipantService } from "./conversationParticipant.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ConversationParticipant)
export class ConversationParticipantResolver extends ConversationParticipantResolverBase {
  constructor(
    protected readonly service: ConversationParticipantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
