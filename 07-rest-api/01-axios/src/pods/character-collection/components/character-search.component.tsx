import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  onSearch: (name: string) => void;
}

export const CharacterSearch: React.FC<Props> = ({ onSearch }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const submit = () => {
    onSearch(value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') submit();
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <TextField
        label="Buscar personaje"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        size="small"
        sx={{
          width: 300,
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
                  onClick={submit}
                  edge="end"
                  aria-label="buscar"
                  sx={{ color: 'white' }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
};
