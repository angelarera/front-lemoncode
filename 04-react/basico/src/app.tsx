import React from "react";
import { AppRouter } from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import { MembersListProvider } from "@/pods/members-list";
import { CharactersListProvider } from "@/pods/rick-and-morty-list";

export const App: React.FC = () => {
  return (
    <MembersListProvider>
      <CharactersListProvider>
        <>
          <CssBaseline />
          <AppRouter />
        </>
      </CharactersListProvider>
    </MembersListProvider>
  );
};
