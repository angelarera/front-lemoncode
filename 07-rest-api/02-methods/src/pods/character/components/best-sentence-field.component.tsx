import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
}

export const BestSentenceField: React.FC<Props> = ({
  value,
  onChange,
  onSave,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSave();
    }
  };

  return (
    <TextField
      label="Enter best sentence"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      size="small"
      fullWidth
      sx={{
        '& .MuiInputLabel-root': {
          color: 'white',
          '&.Mui-focused': {
            color: 'white',
          },
        },
        '& .MuiOutlinedInput-root': {
          color: 'white',
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={onSave}
                edge="end"
                aria-label="save sentence"
                sx={{ color: 'white' }}
              >
                <SaveIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
