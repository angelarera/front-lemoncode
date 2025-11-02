import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { appRoutes } from "@/router/routes";

export const NavigationButton: React.FC = () => {
  const location = useLocation();

  const isCatsPage = location.pathname === appRoutes.root;
  const targetRoute = isCatsPage ? appRoutes.dogs : appRoutes.root;
  const buttonText = isCatsPage ? "See Dogs" : "See Cats";

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
        to={targetRoute}
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
        {buttonText}
      </Button>
    </Box>
  );
};
