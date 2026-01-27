export interface Routes {
  root: string;
  house: (houseId: string) => string;
}

export const routeConstants: Routes = {
  root: '/',
  house: (houseId: string) => `/houses/${houseId}`,
};
