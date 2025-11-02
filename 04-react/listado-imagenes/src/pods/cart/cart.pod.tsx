import React from "react";
import { Box, Paper } from "@mui/material";
import { CartEmpty, CartHeader, CartList, RemoveAllBtn } from "./components";
import { CartContext } from "@/core/context";

export const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const { selectedIds } = React.useContext(CartContext);
  const hasItems = selectedIds.length > 0;

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <Paper
      sx={{
        width: isOpen ? 300 : 60,
        height: "100vh",
        position: "sticky",
        top: 0,
        transition: "width 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CartHeader
        isOpen={isOpen}
        onToggle={handleToggle}
        onClose={handleClose}
      />

      {isOpen && (
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box sx={{ flex: 1, overflow: "auto" }}>
            {hasItems ? <CartList /> : <CartEmpty />}
          </Box>

          <RemoveAllBtn />
        </Box>
      )}
    </Paper>
  );
};
