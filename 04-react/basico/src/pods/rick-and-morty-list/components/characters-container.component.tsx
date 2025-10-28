import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const CharactersContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: 2,
        width: "100%",
        display: "flex",
        gap: 4,
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
