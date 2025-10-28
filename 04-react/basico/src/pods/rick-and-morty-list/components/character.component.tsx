import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { Character } from "../list.vm";

interface Props {
  character: Character;
  onSelect: (id: string) => void;
}

export const CharacterCard: React.FC<Props> = ({ character, onSelect }) => {
  return (
    <Card
      onClick={() => onSelect?.(character.id?.toString())}
      sx={{
        display: "flex",
        backgroundColor: "#454a52ff",
        color: "white",
        boxShadow: 2,
        transition: "0.2s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-2px)",
        },
        width: 350,
        height: 140,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 140, height: 140 }}
        image={character.image}
        alt={character.name}
      />

      <CardContent
        sx={{
          flex: 1,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            lineHeight: "125%",
            marginBottom: 1,
          }}
        >
          {character.name}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
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
                    width: "fit-content",
                  }
                : {
                    fontWeight: "bold",
                    width: "fit-content",
                  }
            }
          />
          <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
            {character.species}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
