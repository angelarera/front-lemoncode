import { routeConstants } from '#core/constants';
import Link from 'next/link';
import React from 'react';
import { House } from '../house-list.vm';
import classes from './house-item.module.css';

interface Props {
  house: House;
}

export const HouseItem: React.FC<Props> = (props) => {
  const { house } = props;

  return (
    <Link href={routeConstants.house(house.id)} className={classes.root}>
      <figure className={classes.imageContainer}>
        <img
          className={classes.image}
          src={house.image}
          alt={house.name}
          loading="lazy"
        />
      </figure>
      <div className={classes.titleRating}>
        <h2 className={classes.title}>{house.name}</h2>
        <p className={classes.rating}>⭐ {house.ratingAverage.toFixed(1)}</p>
      </div>
      <div className={classes.details}>
        <p>
          {house.city}, {house.country}
        </p>
        <p>{house.price}€/noche</p>
      </div>
    </Link>
  );
};
