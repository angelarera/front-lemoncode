import React from "react";
import { Order } from "@/common-app/api";

interface OrdersContextModel {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  updateOrder: (orderId: string, updatedOrder: Order) => void;
}

export const OrdersContext = React.createContext<OrdersContextModel>({
  orders: [],
  setOrders: () => {},
  updateOrder: () => {},
});

export const OrdersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [orders, setOrders] = React.useState<Order[]>([]);

  const updateOrder = (orderId: string, updatedOrder: Order) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === orderId ? updatedOrder : order))
    );
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        updateOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrdersContext = () => {
  const context = React.useContext(OrdersContext);

  if (context === undefined) {
    throw new Error("useOrdersContext must be used within an OrdersProvider");
  }

  return context;
};
