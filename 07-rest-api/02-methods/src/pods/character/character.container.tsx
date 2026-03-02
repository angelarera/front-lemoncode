import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { getCharacter } from './api/character.api';
import { CharacterDetail } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';

export const CharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<CharacterDetail | null>(
    null
  );

  React.useEffect(() => {
    if (id) {
      getCharacter(id).then((apiCharacter) => {
        setCharacter(mapCharacterFromApiToVm(apiCharacter));
      });
    }
  }, [id]);

  if (!character) {
    return <div style={{ color: 'white' }}>Cargando...</div>;
  }

  return <CharacterComponent character={character} />;
};
