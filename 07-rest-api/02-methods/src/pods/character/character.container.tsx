import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { getCharacter, updateCharacterBestSentence } from './api/character.api';
import { CharacterDetail } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';

export const CharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<CharacterDetail | null>(
    null
  );
  const [bestSentence, setBestSentence] = React.useState('');

  const loadCharacter = async () => {
    if (id) {
      const apiCharacter = await getCharacter(id);
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
      setBestSentence(apiCharacter.bestSentence || '');
    }
  };

  React.useEffect(() => {
    loadCharacter();
  }, [id]);

  const handleSaveBestSentence = async () => {
    if (id) {
      const success = await updateCharacterBestSentence(id, bestSentence);
      if (success) {
        loadCharacter();
      }
    }
  };

  if (!character) {
    return <div style={{ color: 'white' }}>Cargando...</div>;
  }

  return (
    <CharacterComponent
      character={character}
      bestSentence={bestSentence}
      onBestSentenceChange={setBestSentence}
      onSaveBestSentence={handleSaveBestSentence}
    />
  );
};
