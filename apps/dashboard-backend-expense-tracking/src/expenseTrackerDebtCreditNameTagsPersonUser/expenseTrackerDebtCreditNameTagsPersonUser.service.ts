import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpenseTrackerDebtCreditNameTagsPersonUserServiceBase } from "./base/expenseTrackerDebtCreditNameTagsPersonUser.service.base";

@Injectable()
export class ExpenseTrackerDebtCreditNameTagsPersonUserService extends ExpenseTrackerDebtCreditNameTagsPersonUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
