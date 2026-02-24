import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacterCollection = async (
  name?: string,
  page?: number
): Promise<{ info: { pages: number }; results: CharacterEntityApi[] }> => {
  const { data } = await axios.get(`${API_URL}/character`, {
    params: { ...(name ? { name } : {}), ...(page ? { page } : {}) },
  });

  return data;
};
