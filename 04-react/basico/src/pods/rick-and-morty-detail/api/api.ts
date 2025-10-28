import { CharacterDetail } from "./api.model";

const getCharacterDetail = async (id: number): Promise<CharacterDetail> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json()
  );
};

const getEpisodeName = async (episodeUrl: string): Promise<string> => {
  const response = await fetch(episodeUrl);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const episodeData = await response.json();
  return episodeData.name;
};

export const getCharacterDetailWithEpisode = async (
  id: number
): Promise<CharacterDetail & { firstEpisodeName: string }> => {
  const character = await getCharacterDetail(id);

  let firstEpisodeName = "Unknown episode";
  if (character.episode.length > 0) {
    try {
      firstEpisodeName = await getEpisodeName(character.episode[0]);
    } catch (error) {
      console.error("Error fetching episode name:", error);
    }
  }

  return {
    ...character,
    firstEpisodeName,
  };
};
