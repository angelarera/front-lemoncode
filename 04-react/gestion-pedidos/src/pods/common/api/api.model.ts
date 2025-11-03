export interface OrderLine {
  id: string;
  article: string;
  validated: boolean;
}

export interface Order {
  id: string;
  number: string;
  supplier: string;
  date: string;
  status: "pending" | "validated" | "sent";
  totalAmount: number;
  validatedPercentage: number;
  lines: OrderLine[];
}
