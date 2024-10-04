import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CharityService } from "./charity.service";
import { CharityControllerBase } from "./base/charity.controller.base";

@swagger.ApiTags("charities")
@common.Controller("charities")
export class CharityController extends CharityControllerBase {
  constructor(
    protected readonly service: CharityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
