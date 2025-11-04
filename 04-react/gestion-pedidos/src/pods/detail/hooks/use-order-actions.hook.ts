import { Order } from "../detail.vm";

export const useOrderActions = (
  order: Order,
  setOrder: (order: Order) => void
) => {
  const sendOrder = () => {
    setOrder({ ...order, status: "sent" });
    alert(`Pedido ${order.number} enviado correctamente`);
  };

  return { sendOrder };
};
