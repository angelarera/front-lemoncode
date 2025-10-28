import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { MemberDetail } from "./detail.vm";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = React.memo((props) => {
  const { member } = props;

  return (
    <Box
      sx={{
        maxWidth: 600,
        minHeight: "100dvh",
        margin: "0 auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={member.avatarUrl}
          alt={member.login}
          sx={{
            height: 300,
            objectFit: "cover",
          }}
        />

        <CardContent sx={{ padding: 2 }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            {member.login}
          </Typography>

          <Chip
            label={`ID: ${member.id}`}
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {member.name && (
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Nombre
                </Typography>
                <Typography variant="body1">{member.name}</Typography>
              </Box>
            )}

            {member.company && (
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Empresa
                </Typography>
                <Typography variant="body1">{member.company}</Typography>
              </Box>
            )}

            {member.bio && (
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Bio
                </Typography>
                <Typography variant="body1">{member.bio}</Typography>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
      <Button
        component={Link}
        to={routes.root}
        startIcon={<ArrowBack />}
        variant="outlined"
        sx={{
          mt: 3,
          fontSize: "0.8rem",
          transition: "0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
      >
        Volver al listado
      </Button>
    </Box>
  );
});
