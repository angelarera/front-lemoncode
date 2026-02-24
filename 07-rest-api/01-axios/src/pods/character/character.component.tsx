import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Divider,
  Button,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { linkRoutes } from '#core/router';
import { CharacterDetail } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: CharacterDetail;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          className={classes.media}
        />

        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            className={classes.title}
          >
            {character.name}
          </Typography>

          <Box className={classes.chipContainer}>
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
              sx={
                character.status === 'unknown'
                  ? {
                      backgroundColor: '#181a1eff',
                      color: 'white',
                      fontWeight: 'bold',
                    }
                  : { fontWeight: 'bold' }
              }
            />
          </Box>

          <Divider className={classes.divider} />

          <Box className={classes.infoContainer}>
            <Box>
              <Typography className={classes.infoLabel}>Species</Typography>
              <Typography className={classes.infoValue}>
                {character.species}
              </Typography>
            </Box>

            <Box>
              <Typography className={classes.infoLabel}>Location</Typography>
              <Typography className={classes.infoValue}>
                {character.location}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Button
        component={Link}
        to={linkRoutes.characterCollection}
        startIcon={<ArrowBack />}
        variant="contained"
        className={classes.button}
      >
        Volver al listado de personajes
      </Button>
    </Box>
  );
};
