import React from "react";
import { Box } from "@mui/material";
import { Order } from "./detail.vm";
import { BackToListButton, OrderHeader, OrderLinesTable } from "./components";

interface Props {
  order: Order;
  selectedLines: string[];
  validationMode: "validate" | "invalidate";
  onToggleLine: (lineId: string) => void;
  onToggleAll: () => void;
  onUpdateAmount: (lineId: string, amount: number) => void;
  onSetValidationMode: (mode: "validate" | "invalidate") => void;
  onApplyValidation: () => void;
  onSendOrder: () => void;
}

export const OrderDetail: React.FC<Props> = (props) => {
  const {
    order,
    selectedLines,
    validationMode,
    onToggleLine,
    onToggleAll,
    onUpdateAmount,
    onSetValidationMode,
    onApplyValidation,
    onSendOrder,
  } = props;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: 3,
      }}
    >
      <Box sx={{ maxWidth: 1400, margin: "0 auto" }}>
        <BackToListButton />

        <OrderHeader order={order} onSendOrder={onSendOrder} />

        <OrderLinesTable
          lines={order.lines}
          selectedLines={selectedLines}
          validationMode={validationMode}
          onToggleLine={onToggleLine}
          onToggleAll={onToggleAll}
          onUpdateAmount={onUpdateAmount}
          onSetValidationMode={onSetValidationMode}
          onApplyValidation={onApplyValidation}
        />
      </Box>
    </Box>
  );
};
