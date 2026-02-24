import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const loadCharacterCollection = (name?: string, page: number = 1) => {
    getCharacterCollection(name, page).then((data) => {
      setCharacterCollection(mapToCollection(data.results, mapFromApiToVm));
      setCurrentPage(page);
      setTotalPages(data.info?.pages ?? 1);
    });
  };

  return {
    characterCollection,
    loadCharacterCollection,
    currentPage,
    totalPages,
  };
};
