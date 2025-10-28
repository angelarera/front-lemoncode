import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { CharacterDetail } from "./detail.vm";
import { routes } from "@/router";
import { ArrowBack } from "@mui/icons-material";

interface Props {
  character: CharacterDetail;
}

export const Detail: React.FC<Props> = ({ character }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#272b33",
        minHeight: "100dvh",
        width: "100%",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          boxShadow: 2,
          borderRadius: 2,
          backgroundColor: "#454a52ff",
          color: "white",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{
            height: 300,
            objectFit: "cover",
          }}
        />

        <CardContent sx={{ padding: 3 }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {character.name}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Chip
              label={character.status}
              size="small"
              color={
                character.status === "Alive"
                  ? "success"
                  : character.status === "Dead"
                  ? "error"
                  : "default"
              }
              sx={
                character.status === "unknown"
                  ? {
                      backgroundColor: "#181a1eff",
                      color: "white",
                      fontWeight: "bold",
                    }
                  : {
                      fontWeight: "bold",
                    }
              }
            />
          </Box>

          <Divider sx={{ my: 2, backgroundColor: "#666" }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: "#b0b0b0" }}>
                Species
              </Typography>
              <Typography variant="body1">{character.species}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ color: "#b0b0b0" }}>
                Location
              </Typography>
              <Typography variant="body1">{character.location}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ color: "#b0b0b0" }}>
                First Episode
              </Typography>
              <Typography variant="body1">{character.episode}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Button
        component={Link}
        to={routes.rickAndMorty}
        startIcon={<ArrowBack />}
        variant="contained"
        sx={{
          mt: 3,
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
        Volver al listado de personajes
      </Button>
    </Box>
  );
};
