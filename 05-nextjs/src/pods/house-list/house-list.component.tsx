'use client';

import React, { useMemo, useState } from 'react';
import { House } from './house-list.vm';
import { HouseItem, NameSearch, LocationFilter } from './components';
import classes from './house-list.module.css';

interface Props {
  houseList: House[];
}

export const HouseList: React.FC<Props> = (props) => {
  const { houseList } = props;
  const [searchName, setSearchName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = useMemo(() => {
    return houseList.map((house) => `${house.city}, ${house.country}`);
  }, [houseList]);

  const filteredHouses = useMemo(() => {
    return houseList.filter((house) => {
      const matchesSearch = house.name
        .toLowerCase()
        .includes(searchName.toLowerCase());

      const matchesLocation =
        !selectedLocation ||
        `${house.city}, ${house.country}` === selectedLocation;

      return matchesSearch && matchesLocation;
    });
  }, [houseList, searchName, selectedLocation]);

  return (
    <>
      <div className={classes.filters}>
        <NameSearch
          value={searchName}
          onChange={setSearchName}
          placeholder="Buscar por nombre de casa..."
        />

        <LocationFilter
          value={selectedLocation}
          onChange={setSelectedLocation}
          locations={locations}
        />
      </div>

      {filteredHouses.length === 0 ? (
        <div className={classes.noResults}>
          <p className={classes.noResultsText}>
            No se encontraron casas con los filtros aplicados.
          </p>
          <button
            onClick={() => {
              setSearchName('');
              setSelectedLocation('');
            }}
            className={classes.resetButton}
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <ul className={classes.houseList}>
          {filteredHouses.map((house) => (
            <li className={classes.li} key={house.id}>
              <HouseItem house={house} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
