import React from "react";

interface ListContextModel {
  status: string;
  setStatus: (status: string) => void;
  species: string;
  setSpecies: (species: string) => void;
}

export const ListContext = React.createContext<ListContextModel>({
  status: "",
  setStatus: () => {},
  species: "",
  setSpecies: () => {},
});

export const CharactersListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [status, setStatus] = React.useState("");
  const [species, setSpecies] = React.useState("");

  return (
    <ListContext.Provider value={{ status, setStatus, species, setSpecies }}>
      {children}
    </ListContext.Provider>
  );
};
