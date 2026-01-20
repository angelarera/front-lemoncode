'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import * as viewModel from './house.vm';
import classes from './car.module.css';

interface Props {
  house: viewModel.House;
}

export const House: React.FC<Props> = (props) => {
  const { house } = props;
  const router = useRouter();

  return (
    <div className={classes.root}>
      <h2 className={classes.name}>{house.name}</h2>
    </div>
  );
};
