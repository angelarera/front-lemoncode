import React from "react";
import { OrderLine } from "../detail.vm";
import { Paper } from "@mui/material";
import { OrderValidationControls } from "./order-validation-controls.component";
import { OrderLines } from "./order-lines.component";

interface Props {
  lines: OrderLine[];
  selectedLines: string[];
  validationMode: "validate" | "invalidate";
  onToggleLine: (lineId: string) => void;
  onToggleAll: () => void;
  onUpdateAmount: (lineId: string, amount: number) => void;
  onSetValidationMode: (mode: "validate" | "invalidate") => void;
  onApplyValidation: () => void;
}

export const OrderLinesTable: React.FC<Props> = (props) => {
  const {
    lines,
    selectedLines,
    validationMode,
    onToggleLine,
    onToggleAll,
    onUpdateAmount,
    onSetValidationMode,
    onApplyValidation,
  } = props;

  return (
    <Paper>
      <OrderValidationControls
        validationMode={validationMode}
        selectedCount={selectedLines.length}
        onSetValidationMode={onSetValidationMode}
        onApplyValidation={onApplyValidation}
      />
      <OrderLines
        lines={lines}
        selectedLines={selectedLines}
        onToggleLine={onToggleLine}
        onToggleAll={onToggleAll}
        onUpdateAmount={onUpdateAmount}
      />
    </Paper>
  );
};
