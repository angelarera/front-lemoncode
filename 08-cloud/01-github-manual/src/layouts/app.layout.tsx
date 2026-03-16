import React from "react";
import { Box } from "@mui/material";
import { Cart } from "@/pods/cart";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box sx={{ display: "flex", minHeight: "100vh" }}>
    <Box sx={{ flex: 1 }}>{children}</Box>

    <Cart />
  </Box>
);
