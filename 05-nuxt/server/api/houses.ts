import { houses } from "../data/houses";

const calculateAverageRating = (reviews: any[]): number => {
  if (!reviews || reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Number((total / reviews.length).toFixed(1));
};

export default defineEventHandler(() => {
  return houses.map((house) => ({
    ...house,
    ratingAverage: calculateAverageRating(house.reviews),
  }));
});
