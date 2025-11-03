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
        validated: true,
      },
      {
        id: "1-2",
        article: "Recambios impresión",
        validated: false,
      },
      {
        id: "1-3",
        article: "Soportes plataforma",
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
        validated: true,
      },
      { id: "2-2", article: "Memorias RAM 16GB", validated: true },
      { id: "2-3", article: "Discos SSD 1TB", validated: true },
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
        validated: true,
      },
      {
        id: "3-2",
        article: "Rodamientos axiales",
        validated: false,
      },
      {
        id: "3-3",
        article: "Sensores temperatura",
        validated: true,
      },
      { id: "3-4", article: "Cables shielded", validated: false },
    ],
  },
];
