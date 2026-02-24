import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';
import { linkRoutes } from '#core/router/routes';

export const CharacterCollectionContainer: React.FunctionComponent = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleSelect = (id: number) => {
    navigate(linkRoutes.characterDetail(id.toString()));
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onSelect={handleSelect}
    />
  );
};
