/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GraphQLUpload } from "graphql-upload";
import { FileUpload } from "src/storage/base/storage.types";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Charity } from "./Charity";
import { CharityCountArgs } from "./CharityCountArgs";
import { CharityFindManyArgs } from "./CharityFindManyArgs";
import { CharityFindUniqueArgs } from "./CharityFindUniqueArgs";
import { CreateCharityArgs } from "./CreateCharityArgs";
import { UpdateCharityArgs } from "./UpdateCharityArgs";
import { DeleteCharityArgs } from "./DeleteCharityArgs";
import { CharityService } from "../charity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Charity)
export class CharityResolverBase {
  constructor(
    protected readonly service: CharityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Charity",
    action: "read",
    possession: "any",
  })
  async _charitiesMeta(
    @graphql.Args() args: CharityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Charity])
  @nestAccessControl.UseRoles({
    resource: "Charity",
    action: "read",
    possession: "any",
  })
  async charities(
    @graphql.Args() args: CharityFindManyArgs
  ): Promise<Charity[]> {
    return this.service.charities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Charity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Charity",
    action: "read",
    possession: "own",
  })
  async charity(
    @graphql.Args() args: CharityFindUniqueArgs
  ): Promise<Charity | null> {
    const result = await this.service.charity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Charity)
  @nestAccessControl.UseRoles({
    resource: "Charity",
    action: "create",
    possession: "any",
  })
  async createCharity(
    @graphql.Args() args: CreateCharityArgs
  ): Promise<Charity> {
    return await this.service.createCharity({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Charity)
  @nestAccessControl.UseRoles({
    resource: "Charity",
    action: "update",
    possession: "any",
  })
  async updateCharity(
    @graphql.Args() args: UpdateCharityArgs
  ): Promise<Charity | null> {
    try {
      return await this.service.updateCharity({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Charity)
  @nestAccessControl.UseRoles({
    resource: "Charity",
    action: "delete",
    possession: "any",
  })
  async deleteCharity(
    @graphql.Args() args: DeleteCharityArgs
  ): Promise<Charity | null> {
    try {
      return await this.service.deleteCharity(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Charity)
  async uploadImage(
    @graphql.Args({
      name: "file",
      type: () => GraphQLUpload,
    })
    file: FileUpload,
    @graphql.Args()
    args: CharityFindUniqueArgs
  ): Promise<Charity> {
    return await this.service.uploadImage(args, file);
  }

  @graphql.Mutation(() => Charity)
  async deleteImage(
    @graphql.Args()
    args: CharityFindUniqueArgs
  ): Promise<Charity> {
    return await this.service.deleteImage(args);
  }
}
