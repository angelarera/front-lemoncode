import { mockedOrders, Order } from "@/common-app/api";

export const getOrders = (): Promise<Order[]> => {
  return Promise.resolve(mockedOrders);
};
