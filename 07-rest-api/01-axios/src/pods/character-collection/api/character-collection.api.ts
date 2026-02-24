import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacterCollection = async (
  name?: string
): Promise<CharacterEntityApi[]> => {
  const { data } = await axios.get(`${API_URL}/character`);
  return data.results;
};
