import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const BackToListButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToList = () => {
    navigate("/");
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Button
        variant="outlined"
        onClick={handleBackToList}
        startIcon={<ArrowBackIcon />}
      >
        Volver al listado de pedidos
      </Button>
    </Box>
  );
};
