import React from "react";
import { Order } from "../detail.vm";
import { OrdersContext } from "@/core/contexts";

export const useValidation = () => {
  const { updateOrder } = React.useContext(OrdersContext);

  const applyValidation = (
    order: Order,
    selectedLines: string[],
    validationMode: "validate" | "invalidate",
    onComplete?: () => void
  ) => {
    const updatedLines = order.lines.map((line) =>
      selectedLines.includes(line.id)
        ? { ...line, validated: validationMode === "validate" }
        : line
    );

    const validatedCount = updatedLines.filter((line) => line.validated).length;
    const validatedPercentage = Math.round(
      (validatedCount / updatedLines.length) * 100
    );

    // Ensure the status type for Typescript
    const newStatus: "pending" | "validated" | "sent" =
      validatedPercentage === 100 ? "validated" : "pending";

    const updatedOrder = {
      ...order,
      lines: updatedLines,
      validatedPercentage,
      status: newStatus,
    };

    updateOrder(order.id, updatedOrder);
    onComplete?.();
  };

  return { applyValidation };
};
