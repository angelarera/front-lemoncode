import React from 'react';
import classes from './name-search.module.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const NameSearch: React.FC<Props> = ({
  value,
  onChange,
  placeholder = 'Casa rural en...',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <form className={classes.search}>
      <label htmlFor="name-search">Busca por nombre de casa</label>
      <input
        id="name-search"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={classes.searchInput}
        aria-label="Buscar casas por nombre"
      />
    </form>
  );
};
