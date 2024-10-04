import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntityMediaServiceBase } from "./base/entityMedia.service.base";

@Injectable()
export class EntityMediaService extends EntityMediaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
