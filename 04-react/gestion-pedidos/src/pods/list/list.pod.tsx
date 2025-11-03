import React from "react";
import { Order } from "./list.vm";
import { getOrders } from "./api/api";
import { mapOrdersToVM } from "./list.mapper";
import { OrderList } from "./list.component";

interface Props {
  onSelect: (id: string) => void;
}

export const ListPod: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [orders, setOrders] = React.useState<Order[]>([]);

  React.useEffect(() => {
    getOrders().then(mapOrdersToVM).then(setOrders);
  }, []);

  return <OrderList orders={orders} onSelect={onSelect} />;
};
