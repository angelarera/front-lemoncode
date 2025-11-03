import { generatePath } from "react-router-dom";

interface AppRoutes {
  root: string;
  orderDetail: string;
}

interface LinkRoutes extends Omit<AppRoutes, "orderDetail"> {
  orderDetail: (id: string) => string;
}

export const appRoutes: AppRoutes = {
  root: "/",
  orderDetail: "/detail/:id",
};

export const routes: LinkRoutes = {
  ...appRoutes,
  orderDetail: (id: string) => generatePath(appRoutes.orderDetail, { id }),
};
