import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { CartContext } from "@/core/context";

interface Props {
  id: string;
  title: string;
  picUrl: string;
}

export const CartItem: React.FC<Props> = ({ id, title, picUrl }) => {
  const { removeFromCart } = React.useContext(CartContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        p: 1,
        borderBottom: "1px solid #eee",
      }}
    >
      <img
        src={picUrl}
        alt={title}
        style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }}
      />
      <Typography variant="body2" sx={{ flex: 1 }}>
        {title}
      </Typography>
      <IconButton
        size="small"
        onClick={() => removeFromCart(id)}
        sx={{ color: "error.main" }}
      >
        <Delete />
      </IconButton>
    </Box>
  );
};
