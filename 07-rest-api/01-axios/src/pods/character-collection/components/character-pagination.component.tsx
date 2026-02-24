import * as React from 'react';
import Pagination from '@mui/material/Pagination';

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const CharacterPagination: React.FC<Props> = ({
  page,
  totalPages,
  onChange,
}) => {
  if (!totalPages || totalPages <= 1) return null;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onChange(value)}
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#fff',
            border: '1px solid transparent',
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
          '& .Mui-selected': {
            backgroundColor: 'transparent !important',
            color: '#fff',
            border: '1px solid #fff',
          },
        }}
      />
    </div>
  );
};
