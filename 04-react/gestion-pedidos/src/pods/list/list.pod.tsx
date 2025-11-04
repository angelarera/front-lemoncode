import React from "react";
import { getOrders } from "./api/api";
import { mapOrdersToVM } from "./list.mapper";
import { OrderList } from "./list.component";
import { OrdersContext } from "@/core/contexts/orders.context";

interface Props {
  onSelect: (id: string) => void;
}

export const ListPod: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const { orders, setOrders } = React.useContext(OrdersContext);

  React.useEffect(() => {
    getOrders().then(mapOrdersToVM).then(setOrders);
  }, [setOrders]);

  return <OrderList orders={orders} onSelect={onSelect} />;
};
