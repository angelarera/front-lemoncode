import React from "react";
import { Order } from "../detail.vm";

export const useLineSelection = (order: Order) => {
  const [selectedLines, setSelectedLines] = React.useState<string[]>([]);

  const toggleLine = (lineId: string) => {
    setSelectedLines(
      (prev) =>
        prev.includes(lineId)
          ? prev.filter((id) => id !== lineId) // if the line is already selected, remove it from the array
          : [...prev, lineId] // if not, add it to the array
    );
  };

  const toggleAll = () => {
    setSelectedLines((prev) =>
      prev.length === order.lines.length // same logic as before, but applied to all lines
        ? []
        : order.lines.map((line) => line.id)
    );
  };

  return {
    selectedLines,
    toggleLine,
    toggleAll,
    setSelectedLines,
  };
};
