import React from "react";
import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { Order } from "../detail.vm";

interface Props {
  order: Order;
  onSendOrder: () => void;
}

export const OrderHeader: React.FC<Props> = (props) => {
  const { order, onSendOrder } = props;
  const canSend = order.validatedPercentage === 100;

  const getStatusChip = (status: string) => {
    switch (status) {
      case "validated":
        return <Chip label="Validado" color="success" size="medium" />;
      case "sent":
        return <Chip label="Enviado" color="primary" size="medium" />;
      default:
        return <Chip label="Pendiente" color="warning" size="medium" />;
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Pedido: {order.number}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            <strong>Proveedor:</strong> {order.supplier}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            <strong>Fecha:</strong> {order.date}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Importe Total:</strong> {order.totalAmount}€
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">
              <strong>Estado:</strong>
            </Typography>
            {getStatusChip(order.status)}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">
              <strong>Validación:</strong>
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {order.validatedPercentage}%
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={!canSend}
            onClick={onSendOrder}
          >
            Enviar Pedido
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
