import React from "react";
import { getOrderById } from "../api/api";
import { mapOrderToVM } from "../detail.mapper";
import { OrdersContext } from "@/core/contexts";

export const useOrderDetail = (orderId: string) => {
  const { orders, setOrders, updateOrder } = React.useContext(OrdersContext);

  // Find the order in the context
  const order = React.useMemo(
    () => orders.find((o) => o.id === orderId),
    [orders, orderId]
  );

  // If it's not in the context, load it from the API and save it to the context
  React.useEffect(() => {
    let mounted = true;

    if (!order) {
      getOrderById(orderId)
        .then(mapOrderToVM)
        .then((fetched) => {
          if (!mounted) return;
          setOrders((prev) =>
            prev.find((p) => p.id === fetched.id) ? prev : [...prev, fetched]
          );
        });
    }

    return () => {
      mounted = false;
    };
  }, [order, orderId, setOrders]);

  const [validationMode, setValidationMode] = React.useState<
    "validate" | "invalidate"
  >("validate");

  return {
    order,
    validationMode,
    setValidationMode,
    updateOrder,
  };
};
