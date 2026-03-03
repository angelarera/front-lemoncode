import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterDetail => ({
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
  location: character.origin.name,
  bestSentence: character.bestSentence || '',
});
