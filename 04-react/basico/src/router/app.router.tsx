import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ListPage, DetailScene } from "@/scenes";
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
                <Route path={appRoutes.root} element={<ListPage />} />
                <Route path={appRoutes.detail} element={<DetailScene />} />
              </Routes>
            </AppLayout>
          }
        ></Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
