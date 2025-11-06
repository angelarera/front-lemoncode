import React from "react";
import { getOrders } from "./api/api";
import { mapOrdersToVM } from "./list.mapper";
import { OrderList } from "./list.component";
import { OrdersContext } from "@/core/contexts/orders.context";
import { Order } from "./list.vm";

interface Props {
  onSelect: (id: string) => void;
}

export const ListPod: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const { orders, setOrders } = React.useContext(OrdersContext);

  React.useEffect(() => {
    // Only load if there are no orders in the context
    if (orders.length === 0) {
      getOrders().then(setOrders);
    }
  }, [orders.length, setOrders]);

  // Use the context orders, so if there are changes list pod can reflect them
  const ordersForList = mapOrdersToVM(orders);

  return <OrderList orders={ordersForList} onSelect={onSelect} />;
};
