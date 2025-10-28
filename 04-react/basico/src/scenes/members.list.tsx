import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { ListPod } from "@/pods/members-list";

export const MembersListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (login: string, org?: string) => {
    navigate(routes.memberDetail(login), { state: { org } });
  };

  return <ListPod onSelect={handleSelect} />;
};
