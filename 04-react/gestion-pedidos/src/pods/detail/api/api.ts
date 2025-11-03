import { mockedOrders, Order } from "@/pods/common/api";

export const getOrderById = (id: string): Promise<Order> => {
  return Promise.resolve(mockedOrders.find((order) => order.id === id));
};
