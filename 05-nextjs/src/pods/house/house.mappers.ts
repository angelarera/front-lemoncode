import { ENV } from '#core/constants';
import * as apiModel from './api';
import * as viewModel from './house.vm';

const calculateAverageRating = (reviews: apiModel.Review[]): number => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
};

export const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House =>
  Boolean(house)
    ? {
        id: house.id,
        name: house.name,
        description: house.description,
        location: `${house.city}, ${house.country}`,
        bedrooms: house.bedrooms,
        bathrooms: house.bathrooms,
        priceFormatted: `${house.price}€ / noche`,
        imageUrl: `${ENV.BASE_PICTURES_URL}${house.image}`,
        amenities: house.amenities,
        ratingAverage: calculateAverageRating(house.reviews),
      }
    : viewModel.createEmptyHouse();
