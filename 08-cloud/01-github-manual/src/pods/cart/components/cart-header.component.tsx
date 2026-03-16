import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Close, ShoppingCart } from "@mui/icons-material";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const CartHeader: React.FC<Props> = ({ isOpen, onToggle, onClose }) => {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #eee",
      }}
    >
      <IconButton onClick={onToggle}>
        <ShoppingCart />
      </IconButton>
      {isOpen && (
        <>
          <Typography variant="h6" sx={{ flex: 1, ml: 1 }}>
            Cart
          </Typography>
          <IconButton size="small" onClick={onClose}>
            <Close />
          </IconButton>
        </>
      )}
    </Box>
  );
};
