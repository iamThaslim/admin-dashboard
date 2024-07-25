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
import { ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput } from "./ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExpenseTrackerDebtCreditNameTagsPersonUserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput)
  @IsOptional()
  @Field(() => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput, {
    nullable: true,
  })
  every?: ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput)
  @IsOptional()
  @Field(() => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput, {
    nullable: true,
  })
  some?: ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput)
  @IsOptional()
  @Field(() => ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput, {
    nullable: true,
  })
  none?: ExpenseTrackerDebtCreditNameTagsPersonUserWhereInput;
}
export { ExpenseTrackerDebtCreditNameTagsPersonUserListRelationFilter as ExpenseTrackerDebtCreditNameTagsPersonUserListRelationFilter };
