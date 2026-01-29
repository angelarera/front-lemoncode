import React from 'react';
import classes from './location-filter.module.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  locations: string[];
}

export const LocationFilter: React.FC<Props> = ({
  value,
  onChange,
  locations,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  // Para evitar repetir ubicaciones al extraerlas del listado de la api
  const uniqueLocations = Array.from(new Set(locations)).sort();

  return (
    <form className={classes.filter}>
      <label>Busca por localización</label>
      <select
        value={value}
        onChange={handleChange}
        className={classes.filterSelect}
        aria-label="Filtrar por ubicación"
      >
        <option value="">Todas las ubicaciones</option>
        {uniqueLocations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </form>
  );
};
