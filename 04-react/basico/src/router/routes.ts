import { generatePath } from "react-router-dom";

interface AppRoutes {
  root: string;
  detail: string;
}

interface LinkRoutes extends Omit<AppRoutes, "detail"> {
  detail: (login: string) => string;
}

export const appRoutes: AppRoutes = {
  root: "/",
  detail: "/detail/:login",
};

export const routes: LinkRoutes = {
  ...appRoutes,
  detail: (login: string) => generatePath(appRoutes.detail, { login }),
};
