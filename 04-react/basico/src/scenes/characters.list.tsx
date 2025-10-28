import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { ListPod } from "../pods/rick-and-morty-list/list.pod";

export const CharactersListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (id?: string) => {
    navigate(routes.characterDetail(id));
  };

  return <ListPod onSelect={handleSelect} />;
};
