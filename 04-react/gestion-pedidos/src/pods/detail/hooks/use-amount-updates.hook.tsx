import React from "react";
import { OrdersContext } from "@/core/contexts";
import { Order } from "../detail.vm";

export const useAmountUpdates = () => {
  const { updateOrder } = React.useContext(OrdersContext);

  const updateAmount = (order: Order, lineId: string, amount: number) => {
    const updatedLines = order.lines.map((line) =>
      line.id === lineId ? { ...line, amount } : line
    );

    const newTotalAmount = updatedLines.reduce(
      (sum, line) => sum + line.amount,
      0
    );

    const updatedOrder = {
      ...order,
      lines: updatedLines,
      totalAmount: newTotalAmount,
    };

    updateOrder(order.id, updatedOrder);
  };

  return { updateAmount };
};
