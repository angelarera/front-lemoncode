import { Order } from "../detail.vm";

export const useAmountUpdates = (
  order: Order,
  setOrder: (order: Order) => void
) => {
  const updateAmount = (lineId: string, amount: number) => {
    const updatedLines = order.lines.map((line) =>
      line.id === lineId ? { ...line, amount } : line
    );

    const newTotalAmount = updatedLines.reduce(
      (sum, line) => sum + line.amount,
      0
    );

    setOrder({
      ...order,
      lines: updatedLines,
      totalAmount: newTotalAmount,
    });
  };

  return { updateAmount };
};
