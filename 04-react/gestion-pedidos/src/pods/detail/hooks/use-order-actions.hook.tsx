import React from "react";
import { Order } from "../detail.vm";
import { OrdersContext } from "@/core/contexts";

export const useOrderActions = () => {
  const { updateOrder } = React.useContext(OrdersContext);

  const sendOrder = (order: Order) => {
    const updatedOrder: Order = {
      ...order,
      status: "sent",
    };
    updateOrder(order.id, updatedOrder);
    alert(`Pedido ${order.number} enviado correctamente`);
  };

  return { sendOrder };
};
