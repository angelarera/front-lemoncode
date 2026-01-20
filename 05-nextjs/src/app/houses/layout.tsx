import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import classes from './layout.module.css';

export const metadata: Metadata = {
  title: 'Casa rural Málaga',
};

interface Props {
  children: React.ReactNode;
}

const HousesLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <nav className={classes.nav}>
        <Link href="/" className={classes.link}>
          <Image src="/home-logo.png" alt="logo" width="32" height="23" />
        </Link>
        <h1 className={classes.title}>Rent a house</h1>
      </nav>
      <div className={classes.content}>{children}</div>
    </>
  );
};

export default HousesLayout;
