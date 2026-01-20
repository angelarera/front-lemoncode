import { mapToCollection } from '#common/mappers';
import { ENV } from '#core/constants';
import * as apiModel from './api';
import * as viewModel from './house-list.vm';

const calculateAverageRating = (reviews: apiModel.Review[]): number => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
};

export const mapHouseListFromApiToVm = (
  houseList: apiModel.House[]
): viewModel.House[] => mapToCollection(houseList, mapHouseFromApiToVm);

const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House => ({
  id: house.id,
  name: house.name,
  city: house.city,
  country: house.country,
  price: house.price,
  image: `${ENV.BASE_PICTURES_URL}${house.image}`,
  ratingAverage: calculateAverageRating(house.reviews),
});
