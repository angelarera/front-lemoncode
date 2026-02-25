import { generatePath } from 'react-router';

interface SwitchRoutes {
  characterCollection: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  characterCollection: '/',
  characterDetail: '/character/:id',
};

interface LinkRoutes extends Omit<SwitchRoutes, 'characterDetail'> {
  characterDetail: (id: string) => string;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterDetail: (id) => generatePath(switchRoutes.characterDetail, { id }),
};
