import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onSelect: (id: number) => void;
}

export const CharacterCard: React.FC<Props> = ({ character, onSelect }) => {
  const handleClick = () => {
    if (character.id) {
      onSelect(character.id);
    }
  };

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardMedia
        component="img"
        className={classes.media}
        image={character.image}
        alt={character.name}
      />
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h3" className={classes.name}>
          {character.name}
        </Typography>
        <Box className={classes.infoContainer}>
          <Chip
            label={character.status}
            size="small"
            color={
              character.status === 'Alive'
                ? 'success'
                : character.status === 'Dead'
                  ? 'error'
                  : 'default'
            }
            className={classes.chip(character.status)}
          />
          <Typography className={classes.species}>
            {character.species}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
