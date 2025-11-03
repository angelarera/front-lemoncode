export interface Order {
  id: string;
  number: string;
  supplier: string;
  date: string;
  status: "pending" | "validated" | "sent";
  totalAmount: number;
}
