import { mockedOrders, Order } from "@/pods/common/api";

export const getOrders = (): Promise<Order[]> => {
  return Promise.resolve(mockedOrders);
};
