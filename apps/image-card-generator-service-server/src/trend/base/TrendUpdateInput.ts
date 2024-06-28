/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CardUpdateManyWithoutTrendsInput } from "./CardUpdateManyWithoutTrendsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TrendUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CardUpdateManyWithoutTrendsInput,
  })
  @ValidateNested()
  @Type(() => CardUpdateManyWithoutTrendsInput)
  @IsOptional()
  @Field(() => CardUpdateManyWithoutTrendsInput, {
    nullable: true,
  })
  cards?: CardUpdateManyWithoutTrendsInput;

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
  keyword?: string | null;

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
  popularity?: number | null;
}

export { TrendUpdateInput as TrendUpdateInput };
