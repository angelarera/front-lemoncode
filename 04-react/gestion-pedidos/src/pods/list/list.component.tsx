import React from "react";
import * as vm from "./list.vm";
import { OrderTable } from "./components/order-table.component";
import { Box, Typography } from "@mui/material";

interface Props {
  orders: vm.Order[];
  onSelect: (id: string) => void;
}

export const OrderList: React.FC<Props> = (props) => {
  const { orders, onSelect } = props;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: 3,
      }}
    >
      <Box sx={{ maxWidth: 1400, margin: "0 auto" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ marginTop: 2, fontWeight: "bold", color: "#2c3e50" }}
        >
          Gestión de pedidos
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#7f8c8d",
            marginBottom: 3,
            fontStyle: "italic",
          }}
        >
          Selecciona un pedido para verlo o editarlo
        </Typography>
        <OrderTable orders={orders} onSelect={onSelect} />
      </Box>
    </Box>
  );
};
