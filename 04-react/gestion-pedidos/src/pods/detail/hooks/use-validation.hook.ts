import { Order } from "../detail.vm";

export const useValidation = (
  order: Order,
  setOrder: (order: Order) => void
) => {
  const applyValidation = (
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

    setOrder({
      ...order,
      lines: updatedLines,
      validatedPercentage,
      status: validatedPercentage === 100 ? "validated" : "pending",
    });

    onComplete?.();
  };

  return { applyValidation };
};
