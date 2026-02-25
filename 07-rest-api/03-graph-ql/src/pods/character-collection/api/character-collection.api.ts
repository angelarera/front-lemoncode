import { graphql } from '#core/api';
import { CharacterEntityApi } from './character-collection.api-model';

interface GetCharactersResponse {
  characters: {
    info: { pages: number; count: number; next: number; prev: number };
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (
  name?: string,
  page?: number
): Promise<{ info: { pages: number }; results: CharacterEntityApi[] }> => {
  const query = `
    query GetCharacters($page: Int, $filter: FilterCharacter) {
      characters(page: $page, filter: $filter) {
        info {
          pages
        }
        results {
          id
          name
          status
          species
          image
        }
      }
    }
  `;

  const variables = {
    page: page || undefined,
    filter: name ? { name } : undefined,
  };

  const { characters } = await graphql<GetCharactersResponse>({
    query,
    variables,
  });

  return {
    info: { pages: characters.info.pages },
    results: characters.results,
  };
};
