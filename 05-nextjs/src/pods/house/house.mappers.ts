import { ENV } from '#core/constants';
import * as apiModel from './api';
import * as viewModel from './house.vm';

const calculateAverageRating = (reviews: apiModel.Review[]): number => {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House =>
  Boolean(house)
    ? {
        id: house.id,
        name: house.name,
        description: house.description,
        location: `${house.address}, ${house.city}, ${house.country}`,
        bedrooms: house.bedrooms,
        bathrooms: house.bathrooms,
        priceFormatted: `${house.price}€ / noche`,
        imageUrl: `${ENV.BASE_PICTURES_URL}${house.image}`,
        amenities: house.amenities,
        ratingAverage: calculateAverageRating(house.reviews),
        reviews: mapReviewsFromApiToVm(house.reviews),
      }
    : viewModel.createEmptyHouse();

export const mapReviewsFromApiToVm = (
  reviews: apiModel.Review[]
): viewModel.Review[] =>
  reviews.map((review) => ({
    id: review.id,
    author: review.author,
    date: formatDate(review.date),
    comment: review.comment,
    rating: review.rating,
  }));
