import React from "react";
import { AppRouter } from "@/router";
import { CssBaseline } from "@mui/material";

export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppRouter />
    </>
  );
};
