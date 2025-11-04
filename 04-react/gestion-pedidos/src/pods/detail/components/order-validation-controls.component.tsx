import React from "react";
import { Box, Button } from "@mui/material";

interface Props {
  validationMode: "validate" | "invalidate";
  selectedCount: number;
  onSetValidationMode: (mode: "validate" | "invalidate") => void;
  onApplyValidation: () => void;
}

export const OrderValidationControls: React.FC<Props> = (props) => {
  const {
    validationMode,
    selectedCount,
    onSetValidationMode,
    onApplyValidation,
  } = props;

  return (
    <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant={validationMode === "validate" ? "contained" : "outlined"}
          onClick={() => onSetValidationMode("validate")}
          size="small"
        >
          Validar
        </Button>
        <Button
          variant={validationMode === "invalidate" ? "contained" : "outlined"}
          onClick={() => onSetValidationMode("invalidate")}
          size="small"
        >
          Invalidar
        </Button>
        <Button
          variant="contained"
          onClick={onApplyValidation}
          disabled={selectedCount === 0}
          size="small"
        >
          Aplicar a {selectedCount} líneas
        </Button>
      </Box>
    </Box>
  );
};
