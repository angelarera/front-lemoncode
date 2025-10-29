import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { PictureInfo } from "../animal-list.vm";

interface Props {
  picture: PictureInfo;
}

export const AnimalCard: React.FC<Props> = ({ picture }) => {
  return (
    <Card
      sx={{
        width: 250,
        boxShadow: "0 8px 32px rgba(143, 211, 244, 0.4)",
        border: "2px solid rgba(255, 255, 255, 0.6)",
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={picture.picUrl}
        alt={picture.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent>
        <Typography
          variant="h5"
          component="h3"
          sx={{ marginBottom: 2, textAlign: "center", fontWeight: "500" }}
        >
          {picture.title}
        </Typography>

        <Box display="flex" justifyContent="center">
          <FormControlLabel
            sx={{
              alignItems: "flex-center",
              "& .MuiFormControlLabel-label": {
                fontWeight: "500",
                fontSize: "1.1rem",
                marginLeft: 0,
                marginTop: "2px",
              },
            }}
            control={
              <Checkbox
                checked={picture.selected}
                onChange={() => {}}
                color="primary"
              />
            }
            label="Adopt"
          />
        </Box>
      </CardContent>
    </Card>
  );
};
