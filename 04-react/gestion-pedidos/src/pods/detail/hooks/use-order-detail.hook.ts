import React from "react";
import { Order } from "../detail.vm";
import { getOrderById } from "../api/api";
import { mapOrderToVM } from "../detail.mapper";

export const useOrderDetail = (orderId: string) => {
  const [order, setOrder] = React.useState<Order>();
  const [validationMode, setValidationMode] = React.useState<
    "validate" | "invalidate"
  >("validate");

  React.useEffect(() => {
    getOrderById(orderId).then(mapOrderToVM).then(setOrder);
  }, [orderId]);

  return {
    order,
    validationMode,
    setOrder,
    setValidationMode,
  };
};
