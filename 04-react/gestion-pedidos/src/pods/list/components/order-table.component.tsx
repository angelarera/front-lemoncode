import React from "react";
import { Order } from "../list.vm";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface Props {
  orders: Order[];
  onSelect: (id: string) => void;
}

export const OrderTable: React.FC<Props> = (props) => {
  const { orders, onSelect } = props;

  const getStatusChip = (status: string) => {
    switch (status) {
      case "validated":
        return <Chip label="Validado" color="success" size="small" />;
      case "sent":
        return <Chip label="Enviado" color="primary" size="small" />;
      default:
        return <Chip label="Pendiente" color="warning" size="small" />;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell>Número de orden</TableCell>
            <TableCell>Proveedor</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell align="right">Importe total</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              hover
              onClick={() => onSelect(order.id)}
              sx={{
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <TableCell component="th" scope="row">
                {order.number}
              </TableCell>
              <TableCell>{order.supplier}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell align="right">{order.totalAmount}€</TableCell>
              <TableCell>{getStatusChip(order.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
