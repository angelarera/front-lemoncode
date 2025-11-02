import React from "react";
import { Box, Typography } from "@mui/material";
import { getPictures } from "./api/api";
import {
  PictureInfo,
  mapPicturesToVM,
  AnimalsList,
  NavigationButton,
} from "@/pods/common";

export const CatsListPod: React.FC = () => {
  const [pictures, setPictures] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getPictures().then(mapPicturesToVM).then(setPictures);
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)",
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
