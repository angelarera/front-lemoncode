import React from "react";
import * as vm from "./animal-list.vm";
import { CardsContainer, AnimalCard } from "./components";

interface Props {
  pictures: vm.PictureInfo[];
}

export const AnimalsList: React.FC<Props> = (props) => {
  const { pictures } = props;

  return (
    <CardsContainer>
      {pictures.map((picture) => (
        <AnimalCard key={picture.id} picture={picture} />
      ))}
    </CardsContainer>
  );
};
