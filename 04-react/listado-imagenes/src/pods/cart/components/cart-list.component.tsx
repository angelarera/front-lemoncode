import React from "react";
import { Box } from "@mui/material";
import { CartContext } from "@/core/context";
import { CartItem } from "./cart-item.component";

export const CartList: React.FC = () => {
  const { selectedIds, allAnimals } = React.useContext(CartContext);
  const cartItems = allAnimals.filter((item) => selectedIds.includes(item.id));

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <Box>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          picUrl={item.picUrl}
        />
      ))}
    </Box>
  );
};
