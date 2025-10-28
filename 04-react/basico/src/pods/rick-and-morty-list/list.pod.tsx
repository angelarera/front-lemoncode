import React from "react";
import { Box } from "@mui/material";
import { Character } from "./list.vm";
import { List } from "./list.component";
import { getCharacters } from "./api/api";
import { mapCharactersToVM } from "./list.mapper";
import { Filters, NavigationButton } from "./components";
import { ListContext } from "./list.context";

interface Props {
  onSelect?: (id?: string) => void;
}

export const ListPod: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const { status, species, setStatus, setSpecies } =
    React.useContext(ListContext);

  React.useEffect(() => {
    getCharacters(status, species).then(mapCharactersToVM).then(setCharacters);
  }, [status, species]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#272b33",
          minHeight: "100vh",
          width: "100%",
          padding: 2,
        }}
      >
        <Filters
          status={status}
          species={species}
          onStatusChange={setStatus}
          onSpeciesChange={setSpecies}
        />
        <List characters={characters} onSelect={onSelect} />
        <NavigationButton />
      </Box>
    </>
  );
};
