/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SessionUpdateManyWithoutActivitiesInput {
  @Field(() => [SessionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SessionWhereUniqueInput],
  })
  connect?: Array<SessionWhereUniqueInput>;

  @Field(() => [SessionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SessionWhereUniqueInput],
  })
  disconnect?: Array<SessionWhereUniqueInput>;

  @Field(() => [SessionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SessionWhereUniqueInput],
  })
  set?: Array<SessionWhereUniqueInput>;
}

export { SessionUpdateManyWithoutActivitiesInput as SessionUpdateManyWithoutActivitiesInput };
