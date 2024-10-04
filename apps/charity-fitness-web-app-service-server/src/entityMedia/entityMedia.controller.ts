import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EntityMediaService } from "./entityMedia.service";
import { EntityMediaControllerBase } from "./base/entityMedia.controller.base";

@swagger.ApiTags("entityMedias")
@common.Controller("entityMedias")
export class EntityMediaController extends EntityMediaControllerBase {
  constructor(
    protected readonly service: EntityMediaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
