import React from "react";
import * as vm from "./list.vm";
import {
  CharacterCard,
  CharactersContainer,
  NavigationButton,
} from "./components";

interface Props {
  characters: vm.Character[];
  onSelect: (name: string) => void;
}

export const List: React.FC<Props> = (props) => {
  const { characters, onSelect } = props;

  return (
    <CharactersContainer>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onSelect={onSelect}
        />
      ))}
    </CharactersContainer>
  );
};
