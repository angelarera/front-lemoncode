import React from "react";
import { Box } from "@mui/material";
import { getPictures } from "./api/api";
import { PictureInfo, mapPicturesToVM, AnimalsList } from "../common";

export const DogsListPod: React.FC = () => {
  const [pictures, setPictures] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getPictures().then(mapPicturesToVM).then(setPictures);
  }, []);

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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimalsList pictures={pictures} />
      </Box>
    </>
  );
};
