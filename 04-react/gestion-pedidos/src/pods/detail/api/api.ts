import { mockedOrders, Order } from "@/common-app/api";

export const getOrderById = (id: string): Promise<Order> => {
  return Promise.resolve(mockedOrders.find((order) => order.id === id));
};
