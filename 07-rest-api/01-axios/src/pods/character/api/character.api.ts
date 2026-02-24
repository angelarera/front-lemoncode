import axios from 'axios';
import { Character } from './character.api-model';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`${API_URL}/character/${id}`);
  return data;
};
