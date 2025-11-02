import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AppLayout } from "@/layouts";
import { appRoutes } from "./routes";
import { CatsListPage, DogsListPage } from "@/scenes";
import { AnimatePresence } from "framer-motion";

const AnimatedAppContent: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={appRoutes.root} element={<CatsListPage />} />
        <Route path={appRoutes.dogs} element={<DogsListPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <AppLayout>
              <AnimatedAppContent />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
};
