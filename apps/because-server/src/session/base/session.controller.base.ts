/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SessionService } from "../session.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SessionCreateInput } from "./SessionCreateInput";
import { Session } from "./Session";
import { Post } from "../../post/base/Post";
import { SessionFindManyArgs } from "./SessionFindManyArgs";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";
import { SessionUpdateInput } from "./SessionUpdateInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SessionControllerBase {
  constructor(
    protected readonly service: SessionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Session })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSession(
    @common.Body() data: SessionCreateInput
  ): Promise<Session> {
    return await this.service.createSession({
      data: {
        ...data,

        activity: data.activity
          ? {
              connect: data.activity,
            }
          : undefined,

        venue: data.venue
          ? {
              connect: data.venue,
            }
          : undefined,
      },
      select: {
        activity: {
          select: {
            id: true,
          },
        },

        coach: true,
        createdAt: true,
        date: true,
        dayOfWeek: true,
        endTime: true,
        id: true,
        maxParticipants: true,
        startTime: true,
        status: true,
        updatedAt: true,

        venue: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Session] })
  @ApiNestedQuery(SessionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sessions(@common.Req() request: Request): Promise<Session[]> {
    const args = plainToClass(SessionFindManyArgs, request.query);
    return this.service.sessions({
      ...args,
      select: {
        activity: {
          select: {
            id: true,
          },
        },

        coach: true,
        createdAt: true,
        date: true,
        dayOfWeek: true,
        endTime: true,
        id: true,
        maxParticipants: true,
        startTime: true,
        status: true,
        updatedAt: true,

        venue: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async session(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    const result = await this.service.session({
      where: params,
      select: {
        activity: {
          select: {
            id: true,
          },
        },

        coach: true,
        createdAt: true,
        date: true,
        dayOfWeek: true,
        endTime: true,
        id: true,
        maxParticipants: true,
        startTime: true,
        status: true,
        updatedAt: true,

        venue: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSession(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() data: SessionUpdateInput
  ): Promise<Session | null> {
    try {
      return await this.service.updateSession({
        where: params,
        data: {
          ...data,

          activity: data.activity
            ? {
                connect: data.activity,
              }
            : undefined,

          venue: data.venue
            ? {
                connect: data.venue,
              }
            : undefined,
        },
        select: {
          activity: {
            select: {
              id: true,
            },
          },

          coach: true,
          createdAt: true,
          date: true,
          dayOfWeek: true,
          endTime: true,
          id: true,
          maxParticipants: true,
          startTime: true,
          status: true,
          updatedAt: true,

          venue: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSession(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    try {
      return await this.service.deleteSession({
        where: params,
        select: {
          activity: {
            select: {
              id: true,
            },
          },

          coach: true,
          createdAt: true,
          date: true,
          dayOfWeek: true,
          endTime: true,
          id: true,
          maxParticipants: true,
          startTime: true,
          status: true,
          updatedAt: true,

          venue: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        session: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "update",
    possession: "any",
  })
  async connectBookings(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateSession({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "update",
    possession: "any",
  })
  async updateBookings(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateSession({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "update",
    possession: "any",
  })
  async disconnectBookings(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateSession({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        date: true,
        id: true,

        session: {
          select: {
            id: true,
          },
        },

        status: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "update",
    possession: "any",
  })
  async connectTransactions(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateSession({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "update",
    possession: "any",
  })
  async updateTransactions(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateSession({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "update",
    possession: "any",
  })
  async disconnectTransactions(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateSession({
      where: params,
      data,
      select: { id: true },
    });
  }
}
