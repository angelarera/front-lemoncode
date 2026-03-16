import React from "react";
import { Box, Button } from "@mui/material";
import { CartContext } from "@/core/context";

export const RemoveAllBtn: React.FC = () => {
  const { clearCart, selectedIds } = React.useContext(CartContext);
  if (selectedIds.length === 0) return null;

  return (
    <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
      <Button variant="outlined" color="error" fullWidth onClick={clearCart}>
        Clear Cart
      </Button>
    </Box>
  );
};
