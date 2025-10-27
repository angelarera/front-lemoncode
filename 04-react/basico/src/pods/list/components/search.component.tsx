import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { ListContext } from "../list.context";

interface Props {
  onSearch: () => void;
}

export const Search: React.FC<Props> = ({ onSearch }) => {
  const { organization, setOrganization } = React.useContext(ListContext);

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
        onChange={(e) => setOrganization(e.target.value)}
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
