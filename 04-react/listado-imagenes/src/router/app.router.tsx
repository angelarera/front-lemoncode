import { AppLayout } from "@/layouts";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";
import { CatsListPage, DogsListPage } from "@/scenes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <AppLayout>
              <Routes>
                <Route path={appRoutes.root} element={<CatsListPage />} />
                <Route path={appRoutes.dogs} element={<DogsListPage />} />
              </Routes>
            </AppLayout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};
