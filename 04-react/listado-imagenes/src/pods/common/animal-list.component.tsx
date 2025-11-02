import React from "react";
import * as vm from "./animal-list.vm";
import { CardsContainer, AnimalCard, CardTransition } from "./components";
import { Typography } from "@mui/material";

interface Props {
  pictures: vm.PictureInfo[];
}

export const AnimalsList: React.FC<Props> = (props) => {
  const { pictures } = props;

  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 5,
        }}
      >
        Select the images you want to buy
      </Typography>
      <CardsContainer>
        {pictures.map((picture, index) => (
          <CardTransition key={picture.id} index={index}>
            <AnimalCard key={picture.id} picture={picture} />
          </CardTransition>
        ))}
      </CardsContainer>
    </>
  );
};
