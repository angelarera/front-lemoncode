import React from "react";
import { AppRouter } from "./router";
import CssBaseline from "@mui/material/CssBaseline";

export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppRouter />
    </>
  );
};
