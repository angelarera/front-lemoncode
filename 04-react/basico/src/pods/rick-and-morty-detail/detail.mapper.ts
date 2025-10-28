import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapCharactersDetailToVM = (
  data: am.CharacterDetail & { firstEpisodeName: string }
): vm.CharacterDetail => ({
  name: data.name,
  status: data.status,
  species: data.species,
  image: data.image,
  location: data.origin.name,
  episode: data.firstEpisodeName,
});
