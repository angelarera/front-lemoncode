import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

export const NavigationButton: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 3,
        width: "100%",
        display: "flex",
        gap: 4,
        justifyContent: "center",
      }}
    >
      <Button
        component={Link}
        to={routes.root}
        startIcon={<ArrowBack />}
        variant="contained"
        sx={{
          fontSize: "0.9rem",
          fontWeight: "bold",
          backgroundColor: "#3a3f47",
          color: "white",
          border: "1px solid #555",
          padding: "8px 20px",
          transition: "0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#4a4f57",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          },
        }}
      >
        Volver al listado de GitHub
      </Button>
    </Box>
  );
};
