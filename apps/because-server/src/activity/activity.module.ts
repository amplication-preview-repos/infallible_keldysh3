import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ActivityModuleBase } from "./base/activity.module.base";
import { ActivityService } from "./activity.service";
import { ActivityController } from "./activity.controller";
import { ActivityResolver } from "./activity.resolver";

@Module({
  imports: [ActivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [ActivityController],
  providers: [ActivityService, ActivityResolver],
  exports: [ActivityService],
})
export class ActivityModule {}
