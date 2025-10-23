import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { ListPod } from "@/pods/list";

export const ListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (login: string, org?: string) => {
    navigate(routes.detail(login), { state: { org } });
  };

  return <ListPod onSelect={handleSelect} />;
};
