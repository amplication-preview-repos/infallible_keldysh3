import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CharityModuleBase } from "./base/charity.module.base";
import { CharityService } from "./charity.service";
import { CharityController } from "./charity.controller";
import { CharityResolver } from "./charity.resolver";

@Module({
  imports: [CharityModuleBase, forwardRef(() => AuthModule)],
  controllers: [CharityController],
  providers: [CharityService, CharityResolver],
  exports: [CharityService],
})
export class CharityModule {}
