import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExpenseTrackerDebtCreditNameTagsPersonUserModuleBase } from "./base/expenseTrackerDebtCreditNameTagsPersonUser.module.base";
import { ExpenseTrackerDebtCreditNameTagsPersonUserService } from "./expenseTrackerDebtCreditNameTagsPersonUser.service";
import { ExpenseTrackerDebtCreditNameTagsPersonUserController } from "./expenseTrackerDebtCreditNameTagsPersonUser.controller";
import { ExpenseTrackerDebtCreditNameTagsPersonUserResolver } from "./expenseTrackerDebtCreditNameTagsPersonUser.resolver";

@Module({
  imports: [
    ExpenseTrackerDebtCreditNameTagsPersonUserModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [ExpenseTrackerDebtCreditNameTagsPersonUserController],
  providers: [
    ExpenseTrackerDebtCreditNameTagsPersonUserService,
    ExpenseTrackerDebtCreditNameTagsPersonUserResolver,
  ],
  exports: [ExpenseTrackerDebtCreditNameTagsPersonUserService],
})
export class ExpenseTrackerDebtCreditNameTagsPersonUserModule {}
