import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from '#server/src/character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (
  name?: string
): Promise<CharacterEntityApi[]> => {
  if (name) {
    return characterCollection.filter((c) =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  return characterCollection;
};
