import { ExpenseTrackerDebtCreditNameTagsPersonUser as TExpenseTrackerDebtCreditNameTagsPersonUser } from "../api/expenseTrackerDebtCreditNameTagsPersonUser/ExpenseTrackerDebtCreditNameTagsPersonUser";

export const EXPENSETRACKERDEBTCREDITNAMETAGSPERSONUSER_TITLE_FIELD = "id";

export const ExpenseTrackerDebtCreditNameTagsPersonUserTitle = (
  record: TExpenseTrackerDebtCreditNameTagsPersonUser
): string => {
  return record.id?.toString() || String(record.id);
};
