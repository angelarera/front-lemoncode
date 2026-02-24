import React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard, CharactersContainer } from './components';

interface Props {
  characterCollection: CharacterEntityVm[];
  onSelect: (id: number) => void; // Cambiado a number
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
  const { characterCollection, onSelect } = props;

  return (
    <CharactersContainer>
      {characterCollection.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onSelect={onSelect}
        />
      ))}
    </CharactersContainer>
  );
};
