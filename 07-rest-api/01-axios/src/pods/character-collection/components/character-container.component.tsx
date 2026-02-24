import React from 'react';
import { Box } from '@mui/material';
import * as classes from './character-container.styles';

interface Props {
  children: React.ReactNode;
}

export const CharactersContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box className={classes.outerBox}>
      <Box className={classes.innerBox}>{children}</Box>
    </Box>
  );
};
