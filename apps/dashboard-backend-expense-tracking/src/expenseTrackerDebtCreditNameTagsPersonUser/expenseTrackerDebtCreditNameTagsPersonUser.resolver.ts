import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExpenseTrackerDebtCreditNameTagsPersonUserResolverBase } from "./base/expenseTrackerDebtCreditNameTagsPersonUser.resolver.base";
import { ExpenseTrackerDebtCreditNameTagsPersonUser } from "./base/ExpenseTrackerDebtCreditNameTagsPersonUser";
import { ExpenseTrackerDebtCreditNameTagsPersonUserService } from "./expenseTrackerDebtCreditNameTagsPersonUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExpenseTrackerDebtCreditNameTagsPersonUser)
export class ExpenseTrackerDebtCreditNameTagsPersonUserResolver extends ExpenseTrackerDebtCreditNameTagsPersonUserResolverBase {
  constructor(
    protected readonly service: ExpenseTrackerDebtCreditNameTagsPersonUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
