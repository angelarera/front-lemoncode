import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  value: string;
  onChange: (species: string) => void;
}

export const SpeciesFilter: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel
        sx={{
          color: "white",
          "&.Mui-focused": {
            color: "white",
          },
        }}
      >
        Species
      </InputLabel>
      <Select
        value={value}
        label="Species"
        onChange={handleChange}
        sx={{
          color: "white",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          ".MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="human">Human</MenuItem>
        <MenuItem value="alien">Alien</MenuItem>
        <MenuItem value="humanoid">Humanoid</MenuItem>
        <MenuItem value="robot">Robot</MenuItem>
        <MenuItem value="animal">Animal</MenuItem>
        <MenuItem value="mythological">Mythological</MenuItem>
        <MenuItem value="cronenberg">Cronenberg</MenuItem>
        <MenuItem value="disease">Disease</MenuItem>
        <MenuItem value="poopybutthole">Poopybutthole</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};
