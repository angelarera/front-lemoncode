import { houses } from "../../data/houses";
import { House } from "~/types/house";

const calculateAverageRating = (reviews: any[]): number => {
  if (!reviews || reviews.length === 0) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Number((total / reviews.length).toFixed(1));
};

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");

  // 400 for invalid IDs (missing)
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid house id",
    });
  }

  const house = houses.find((h: House) => h.id === id);

  // 404 if house not found
  if (!house) {
    throw createError({
      statusCode: 404,
      statusMessage: "House not found",
    });
  }

  return {
    ...house,
    ratingAverage: calculateAverageRating(house.reviews),
  };
});
