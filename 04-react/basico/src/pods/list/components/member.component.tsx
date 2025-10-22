import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Member } from "../list.vm";

interface Props {
  member: Member;
  onSelect: (login: string) => void;
}

export const MemberCard: React.FC<Props> = ({ member, onSelect }) => {
  return (
    <Card
      sx={{
        width: 200,
        display: "flex",
        flexDirection: "column",
        boxShadow: 1,
        transition: "0.2s ease-in-out",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={member.avatar_url}
        alt={member.login}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1, padding: 1.5 }}>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="h3"
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {member.login}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 1.5, paddingTop: 0 }}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => onSelect(member.login)}
          fullWidth
          sx={{
            fontSize: "0.8rem",
            transition: "0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};
