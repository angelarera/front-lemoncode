import React from "react";
import { AppRouter } from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import { ListProvider } from "./pods/list/list.context";

export const App: React.FC = () => {
  return (
    <>
      <ListProvider>
        <CssBaseline />
        <AppRouter />
      </ListProvider>
    </>
  );
};
