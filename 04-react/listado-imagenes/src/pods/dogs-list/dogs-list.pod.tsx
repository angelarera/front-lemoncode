import React from "react";
import { Box } from "@mui/material";
import { getPictures } from "./api/api";
import { mapPicturesToVM, AnimalsList, NavigationButton } from "@/pods/common";
import { useAnimalList } from "../common/hooks";

export const DogsListPod: React.FC = () => {
  const { pictures } = useAnimalList({
    fetchPictures: getPictures,
    mapToVM: mapPicturesToVM,
  });

  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          width: "100%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimalsList pictures={pictures} />
        <NavigationButton />
      </Box>
    </>
  );
};
