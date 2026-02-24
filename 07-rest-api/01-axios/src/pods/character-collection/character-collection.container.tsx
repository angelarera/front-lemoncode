import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterPagination, CharacterSearch } from './components';
import { linkRoutes } from '#core/router/routes';

export const CharacterCollectionContainer: React.FunctionComponent = () => {
  const {
    characterCollection,
    loadCharacterCollection,
    currentPage,
    totalPages,
  } = useCharacterCollection();
  const [searchName, setSearchName] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleSelect = (id: number) => {
    navigate(linkRoutes.characterDetail(id.toString()));
  };

  const handleSearch = (name: string) => {
    setSearchName(name);
    loadCharacterCollection(name, 1);
  };

  const handlePageChange = (page: number) => {
    loadCharacterCollection(searchName, page);
  };

  return (
    <>
      <CharacterSearch onSearch={handleSearch} />
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onSelect={handleSelect}
      />
      <CharacterPagination
        page={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
      />
    </>
  );
};
