import { houses } from "../../data/houses";
import { House } from "~/types/house";

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

  return house;
});
