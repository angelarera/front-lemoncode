import React from "react";
import { ListPod } from "@/pods/list";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";

export const ListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (login: string) => {
    navigate(routes.detail(login));
  };

  return <ListPod onSelect={handleSelect} />;
};
