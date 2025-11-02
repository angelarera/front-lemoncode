import React from "react";

interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
}

interface CartContextModel {
  selectedIds: string[];
  setSelectedIds: (ids: string[]) => void;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  allAnimals: PictureInfo[];
  setAllAnimals: React.Dispatch<React.SetStateAction<PictureInfo[]>>;
}

export const CartContext = React.createContext<CartContextModel>({
  selectedIds: [],
  setSelectedIds: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  allAnimals: [],
  setAllAnimals: () => {},
});

export const CartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [allAnimals, setAllAnimals] = React.useState<PictureInfo[]>([]);

  const addToCart = (id: string) => {
    setSelectedIds((prev) => [...prev, id]);
  };

  const removeFromCart = (idToRemove: string) => {
    setSelectedIds((currentIds) => {
      const newIds = currentIds.filter((id) => id !== idToRemove);
      return newIds;
    });
  };

  const clearCart = () => {
    setSelectedIds([]);
  };

  return (
    <CartContext.Provider
      value={{
        selectedIds,
        setSelectedIds,
        addToCart,
        removeFromCart,
        clearCart,
        allAnimals,
        setAllAnimals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
