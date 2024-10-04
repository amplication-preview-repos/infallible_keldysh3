import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EntityMediaResolverBase } from "./base/entityMedia.resolver.base";
import { EntityMedia } from "./base/EntityMedia";
import { EntityMediaService } from "./entityMedia.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EntityMedia)
export class EntityMediaResolver extends EntityMediaResolverBase {
  constructor(
    protected readonly service: EntityMediaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
