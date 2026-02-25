import { graphql } from '#core/api';
import { Character } from './character.api-model';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = `
    query GetCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  `;

  const variables = { id };
  const { character } = await graphql<GetCharacterResponse>({
    query,
    variables,
  });
  return character;
};
