import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExpenseTrackerDebtCreditNameTagsPersonUserService } from "./expenseTrackerDebtCreditNameTagsPersonUser.service";
import { ExpenseTrackerDebtCreditNameTagsPersonUserControllerBase } from "./base/expenseTrackerDebtCreditNameTagsPersonUser.controller.base";

@swagger.ApiTags("expenseTrackerDebtCreditNameTagsPersonUsers")
@common.Controller("expenseTrackerDebtCreditNameTagsPersonUsers")
export class ExpenseTrackerDebtCreditNameTagsPersonUserController extends ExpenseTrackerDebtCreditNameTagsPersonUserControllerBase {
  constructor(
    protected readonly service: ExpenseTrackerDebtCreditNameTagsPersonUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
