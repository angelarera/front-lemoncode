import { CssBaseline } from "@mui/material";
import React from "react";
import { AppRouter } from "@/core/router";
import { CartProvider } from "@/core/context";

export const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <CssBaseline />
        <AppRouter />
      </CartProvider>
    </>
  );
};
