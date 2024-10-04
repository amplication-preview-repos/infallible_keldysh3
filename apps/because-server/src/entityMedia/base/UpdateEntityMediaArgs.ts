/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EntityMediaWhereUniqueInput } from "./EntityMediaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EntityMediaUpdateInput } from "./EntityMediaUpdateInput";

@ArgsType()
class UpdateEntityMediaArgs {
  @ApiProperty({
    required: true,
    type: () => EntityMediaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EntityMediaWhereUniqueInput)
  @Field(() => EntityMediaWhereUniqueInput, { nullable: false })
  where!: EntityMediaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EntityMediaUpdateInput,
  })
  @ValidateNested()
  @Type(() => EntityMediaUpdateInput)
  @Field(() => EntityMediaUpdateInput, { nullable: false })
  data!: EntityMediaUpdateInput;
}

export { UpdateEntityMediaArgs as UpdateEntityMediaArgs };