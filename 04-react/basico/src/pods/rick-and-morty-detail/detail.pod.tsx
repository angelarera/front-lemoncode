import React from "react";
import { getCharacterDetailWithEpisode } from "./api/api";
import { CharacterDetail } from "./detail.vm";
import { mapCharactersDetailToVM } from "./detail.mapper";
import { Detail } from "./detail.component";

interface Props {
  id: string;
}

export const DetailPod: React.FC<Props> = (props) => {
  const { id } = props;
  const [character, setCharacter] = React.useState<CharacterDetail>();

  React.useEffect(() => {
    getCharacterDetailWithEpisode(parseInt(id))
      .then(mapCharactersDetailToVM)
      .then(setCharacter);
  }, [id]);

  return character && <Detail character={character} />;
};
