import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapCharacterToVm = (data: am.Character): vm.Character => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  image: data.image,
});

export const mapCharactersToVM = (data: am.Character[]): vm.Character[] =>
  data.map((item) => mapCharacterToVm(item));
