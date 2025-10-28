import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";

export const NavigationButton: React.FC = () => {
  return (
    <Button
      component={Link}
      to={routes.rickAndMorty}
      endIcon={<ArrowForward />}
      variant="contained"
      sx={{
        mt: 3,
        mb: 3,
        fontSize: "0.8rem",
        padding: "6px 16px",
        "&:hover": {
          backgroundColor: "primary.dark",
        },
      }}
    >
      Ir al listado de Rick and Morty
    </Button>
  );
};
