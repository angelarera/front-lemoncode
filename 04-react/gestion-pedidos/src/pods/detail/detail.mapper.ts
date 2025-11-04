import * as am from "@/common-app/api";
import * as vm from "./detail.vm";

export const mapOrderToVM = (data: am.Order): vm.Order => ({
  id: data.id,
  number: data.number,
  supplier: data.supplier,
  date: data.date,
  status: data.status,
  totalAmount: data.totalAmount,
  validatedPercentage: data.validatedPercentage,
  lines: data.lines.map((line) => ({
    id: line.id,
    article: line.article,
    amount: line.amount,
    validated: line.validated,
  })),
});
