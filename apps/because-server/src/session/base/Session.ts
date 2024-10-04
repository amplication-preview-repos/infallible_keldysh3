/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Activity } from "../../activity/base/Activity";

import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsEnum,
  IsInt,
  Min,
  Max,
} from "class-validator";

import { Type } from "class-transformer";
import { Booking } from "../../booking/base/Booking";
import { EnumSessionDayOfWeek } from "./EnumSessionDayOfWeek";
import { EnumSessionStatus } from "./EnumSessionStatus";
import { Transaction } from "../../transaction/base/Transaction";
import { Venue } from "../../venue/base/Venue";

@ObjectType()
class Session {
  @ApiProperty({
    required: false,
    type: () => Activity,
  })
  @ValidateNested()
  @Type(() => Activity)
  @IsOptional()
  activity?: Activity | null;

  @ApiProperty({
    required: false,
    type: () => [Booking],
  })
  @ValidateNested()
  @Type(() => Booking)
  @IsOptional()
  bookings?: Array<Booking>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  coach!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumSessionDayOfWeek,
  })
  @IsEnum(EnumSessionDayOfWeek)
  @IsOptional()
  @Field(() => EnumSessionDayOfWeek, {
    nullable: true,
  })
  dayOfWeek?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maxParticipants!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumSessionStatus,
  })
  @IsEnum(EnumSessionStatus)
  @IsOptional()
  @Field(() => EnumSessionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => [Transaction],
  })
  @ValidateNested()
  @Type(() => Transaction)
  @IsOptional()
  transactions?: Array<Transaction>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Venue,
  })
  @ValidateNested()
  @Type(() => Venue)
  @IsOptional()
  venue?: Venue | null;
}

export { Session as Session };
