import { ENV } from '#core/constants';
import { House } from './house.api-model';

const url = `${ENV.BASE_API_URL}/houses`;

export const getHouse = async (id: string): Promise<House> => {
  return await fetch(`${url}/${id}`).then((response) => response.json());
};
