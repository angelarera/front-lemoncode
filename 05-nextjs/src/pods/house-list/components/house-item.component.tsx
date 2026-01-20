import { routeConstants } from '#core/constants';
import Link from 'next/link';
import React from 'react';
import { House } from '../house-list.vm';
import classes from './car-item.module.css';

interface Props {
  house: House;
}

export const HouseItem: React.FC<Props> = (props) => {
  const { house } = props;

  return (
    <Link href={routeConstants.house(house.id)} className={classes.root}>
      <h2 className={classes.title}></h2>
      <img className={classes.image} src={house.image} alt={house.name} />
    </Link>
  );
};
