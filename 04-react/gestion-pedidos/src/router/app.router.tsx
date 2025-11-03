import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { appRoutes } from "./routes";
import { OrdersDetailScene, OrdersListPage } from "@/scenes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <Routes>
              <Route path={appRoutes.root} element={<OrdersListPage />} />
              <Route
                path={appRoutes.orderDetail}
                element={<OrdersDetailScene />}
              />
            </Routes>
          }
        ></Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
