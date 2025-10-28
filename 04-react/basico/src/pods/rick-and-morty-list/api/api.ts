import { Character } from "./api.model";

export const getCharacters = (
  status: string = "",
  species: string = ""
): Promise<Character[]> => {
  let url = "https://rickandmortyapi.com/api/character";
  const filters = [];

  if (status) {
    filters.push(`status=${status}`);
  }
  if (species) {
    filters.push(`species=${species}`);
  }
  if (filters.length > 0) {
    url += `?${filters.join("&")}`;
  }

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.results);
};
