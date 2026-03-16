import React from "react";
import { Box, Typography } from "@mui/material";

export const CartEmpty: React.FC = () => {
  return (
    <Box sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="body2" color="text.secondary">
        Tu carrito está vacío
      </Typography>
    </Box>
  );
};
