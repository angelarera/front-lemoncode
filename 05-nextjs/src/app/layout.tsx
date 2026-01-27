import React from 'react';
import './globals.css';
import classes from './layout.module.css';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

const RootLayout = (props: Props) => {
  const { children } = props;
  return (
    <html lang="es">
      <body>
        <header className={classes.header}>
          <Link href="/">
            <img src="/home-logo.png" alt="logo" width="125" height="90" />
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
