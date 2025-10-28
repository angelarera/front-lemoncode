import React from "react";
import { Box } from "@mui/material";
import { StatusFilter } from "./status-filter.component";
import { SpeciesFilter } from "./species-filter.component";

interface Props {
  status: string;
  species: string;
  onStatusChange: (status: string) => void;
  onSpeciesChange: (species: string) => void;
}

export const Filters: React.FC<Props> = ({
  status,
  species,
  onStatusChange,
  onSpeciesChange,
}) => {
  return (
    <Box
      sx={{
        mb: 3,
        mt: 5,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <StatusFilter value={status} onChange={onStatusChange} />
      <SpeciesFilter value={species} onChange={onSpeciesChange} />
    </Box>
  );
};
