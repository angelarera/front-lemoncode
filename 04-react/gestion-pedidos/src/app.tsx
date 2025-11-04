import React from "react";
import { AppRouter } from "@/router";
import { CssBaseline } from "@mui/material";
import { OrdersProvider } from "./core/contexts";

export const App: React.FC = () => {
  return (
    <>
      <OrdersProvider>
        <CssBaseline />
        <AppRouter />
      </OrdersProvider>
    </>
  );
};
