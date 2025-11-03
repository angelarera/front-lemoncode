import * as am from "@/pods/common/api";
import * as vm from "./list.vm";

export const mapOrderToVM = (data: am.Order): vm.Order => ({
  id: data.id,
  number: data.number,
  supplier: data.supplier,
  date: data.date,
  status: data.status,
  totalAmount: data.totalAmount,
});

export const mapOrdersToVM = (data: am.Order[]): vm.Order[] =>
  data.map((item) => mapOrderToVM(item));
