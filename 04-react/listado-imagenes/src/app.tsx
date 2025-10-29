import { CssBaseline } from "@mui/material";
import React from "react";
import { AppRouter } from "./router";

export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppRouter />
    </>
  );
};
