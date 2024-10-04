import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EntityMediaModuleBase } from "./base/entityMedia.module.base";
import { EntityMediaService } from "./entityMedia.service";
import { EntityMediaController } from "./entityMedia.controller";
import { EntityMediaResolver } from "./entityMedia.resolver";

@Module({
  imports: [EntityMediaModuleBase, forwardRef(() => AuthModule)],
  controllers: [EntityMediaController],
  providers: [EntityMediaService, EntityMediaResolver],
  exports: [EntityMediaService],
})
export class EntityMediaModule {}
