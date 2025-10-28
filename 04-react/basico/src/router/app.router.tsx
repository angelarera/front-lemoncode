import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  MembersListPage,
  MembersDetailScene,
  CharactersListPage,
  CharactersDetailScene,
} from "@/scenes";
import { appRoutes } from "./routes";
import { AppLayout } from "@/layouts";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <AppLayout>
              <Routes>
                <Route path={appRoutes.root} element={<MembersListPage />} />
                <Route
                  path={appRoutes.memberDetail}
                  element={<MembersDetailScene />}
                />
                <Route
                  path={appRoutes.rickAndMorty}
                  element={<CharactersListPage />}
                />
                <Route
                  path={appRoutes.characterDetail}
                  element={<CharactersDetailScene />}
                />
              </Routes>
            </AppLayout>
          }
        ></Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
