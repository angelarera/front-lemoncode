import { Character } from './character.api-model';
import { mockCharacterCollection } from '../../../../server/src/character-collection.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  const character = mockCharacterCollection.find((c) => c.id === Number(id));
  if (!character) {
    throw new Error('Character not found');
  }
  return character;
};
