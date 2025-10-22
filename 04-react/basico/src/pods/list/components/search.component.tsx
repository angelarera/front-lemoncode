import React from "react";
import { TextField, Button, Box } from "@mui/material";

interface Props {
  organization: string;
  onOrganizationChange: (org: string) => void;
  onSearch: () => void;
}

export const Search: React.FC<Props> = ({
  organization,
  onOrganizationChange,
  onSearch,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 3, mt: 5, display: "flex", alignItems: "center" }}
    >
      <TextField
        label="Filtrar por organización"
        value={organization}
        onChange={(e) => onOrganizationChange(e.target.value)}
        placeholder="lemoncode"
        size="small"
        sx={{ mr: 2, width: 200 }}
      />
      <Button type="submit" variant="contained" size="medium">
        Buscar
      </Button>
    </Box>
  );
};
