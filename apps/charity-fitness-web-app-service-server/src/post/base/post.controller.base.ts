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
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { PostService } from "../post.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PostCreateInput } from "./PostCreateInput";
import { Post } from "./Post";
import { PostFindManyArgs } from "./PostFindManyArgs";
import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostUpdateInput } from "./PostUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PostControllerBase {
  constructor(
    protected readonly service: PostService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Post })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPost(@common.Body() data: PostCreateInput): Promise<Post> {
    return await this.service.createPost({
      data: data,
      select: {
        author: true,
        body: true,
        createdAt: true,
        id: true,
        image: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Post] })
  @ApiNestedQuery(PostFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async posts(@common.Req() request: Request): Promise<Post[]> {
    const args = plainToClass(PostFindManyArgs, request.query);
    return this.service.posts({
      ...args,
      select: {
        author: true,
        body: true,
        createdAt: true,
        id: true,
        image: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async post(
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Post | null> {
    const result = await this.service.post({
      where: params,
      select: {
        author: true,
        body: true,
        createdAt: true,
        id: true,
        image: true,
        status: true,
        title: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePost(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() data: PostUpdateInput
  ): Promise<Post | null> {
    try {
      return await this.service.updatePost({
        where: params,
        data: data,
        select: {
          author: true,
          body: true,
          createdAt: true,
          id: true,
          image: true,
          status: true,
          title: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePost(
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Post | null> {
    try {
      return await this.service.deletePost({
        where: params,
        select: {
          author: true,
          body: true,
          createdAt: true,
          id: true,
          image: true,
          status: true,
          title: true,
          updatedAt: true,
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

  @common.Put(":id/image")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Post,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadImage(
    @common.Param()
    params: PostWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Post> {
    return this.service.uploadImage(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/image")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadImage(
    @common.Param()
    params: PostWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadImage({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/image")
  @swagger.ApiOkResponse({
    type: Post,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteImage(
    @common.Param()
    params: PostWhereUniqueInput
  ): Promise<Post> {
    return this.service.deleteImage({
      where: params,
    });
  }
}