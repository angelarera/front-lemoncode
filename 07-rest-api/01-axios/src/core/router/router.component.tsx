import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { HotelCollectionScene, HotelScene } from '#scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<HotelCollectionScene />}
        />
        <Route path={switchRoutes.characterDetail} element={<HotelScene />} />
      </Routes>
    </HashRouter>
  );
};
