import React from "react";
import { useNavigate } from "react-router-dom";
import { ListPod } from "@/pods/list";
import { routes } from "@/router";

export const OrdersListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (id: string) => {
    navigate(routes.orderDetail(id));
  };

  return <ListPod onSelect={handleSelect} />;
};
