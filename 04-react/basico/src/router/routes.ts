import { generatePath } from "react-router-dom";

interface AppRoutes {
  root: string;
  memberDetail: string;
  rickAndMorty: string;
  characterDetail: string;
}

interface LinkRoutes
  extends Omit<AppRoutes, "memberDetail" | "characterDetail"> {
  memberDetail: (login: string) => string;
  characterDetail: (id: string) => string;
}

export const appRoutes: AppRoutes = {
  root: "/",
  memberDetail: "/detail/:login",
  rickAndMorty: "/rick-and-morty",
  characterDetail: "/rick-and-morty/character/:id",
};

export const routes: LinkRoutes = {
  ...appRoutes,
  memberDetail: (login: string) =>
    generatePath(appRoutes.memberDetail, { login }),
  characterDetail: (id: string) =>
    generatePath(appRoutes.characterDetail, { id }),
};
