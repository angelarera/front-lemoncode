import { Order } from "./api.model";

export const mockedOrders: Order[] = [
  {
    id: "1",
    number: "PED-001",
    supplier: "Tecnologías Avanzadas S.A.",
    date: "2024-01-15",
    status: "pending",
    totalAmount: 2534,
    validatedPercentage: 33,
    lines: [
      {
        id: "1-1",
        article: "Reactivos maquinaria",
        amount: 2345,
        validated: true,
      },
      {
        id: "1-2",
        article: "Recambios impresión",
        amount: 135,
        validated: false,
      },
      {
        id: "1-3",
        article: "Soportes plataforma",
        amount: 54,
        validated: false,
      },
    ],
  },
  {
    id: "2",
    number: "PED-002",
    supplier: "Componentes Electrónicos SL",
    date: "2024-01-16",
    status: "validated",
    totalAmount: 1870,
    validatedPercentage: 100,
    lines: [
      {
        id: "2-1",
        article: "Microprocesadores i7",
        amount: 1200,
        validated: true,
      },
      {
        id: "2-2",
        article: "Memorias RAM 16GB",
        amount: 450,
        validated: true,
      },
      {
        id: "2-3",
        article: "Discos SSD 1TB",
        amount: 220,
        validated: true,
      },
    ],
  },
  {
    id: "3",
    number: "PED-003",
    supplier: "Materiales Industriales Ltda.",
    date: "2024-01-17",
    status: "pending",
    totalAmount: 3420,
    validatedPercentage: 50,
    lines: [
      {
        id: "3-1",
        article: "Tornillería especial",
        amount: 890,
        validated: true,
      },
      {
        id: "3-2",
        article: "Rodamientos axiales",
        amount: 1250,
        validated: false,
      },
      {
        id: "3-3",
        article: "Sensores temperatura",
        amount: 780,
        validated: true,
      },
      {
        id: "3-4",
        article: "Cables shielded",
        amount: 500,
        validated: false,
      },
    ],
  },
];
