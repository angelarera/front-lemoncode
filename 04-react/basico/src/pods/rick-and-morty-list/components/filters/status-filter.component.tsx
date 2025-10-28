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
  onChange: (status: string) => void;
}

export const StatusFilter: React.FC<Props> = ({ value, onChange }) => {
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
        Status
      </InputLabel>
      <Select
        value={value}
        label="Status"
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
        <MenuItem value="alive">Alive</MenuItem>
        <MenuItem value="dead">Dead</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};
