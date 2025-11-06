import React from "react";
import { useParams } from "react-router-dom";
import { useOrderDetail } from "./use-order-detail.hook";
import { useLineSelection } from "./use-line-selection.hook";
import { useAmountUpdates } from "./use-amount-updates.hook";
import { useValidation } from "./use-validation.hook";
import { useOrderActions } from "./use-order-actions.hook";

export const useOrderDetailLogic = () => {
  const { id } = useParams<{ id: string }>();

  const { order, validationMode, setValidationMode } = useOrderDetail(id);
  const { selectedLines, toggleLine, toggleAll, setSelectedLines } =
    useLineSelection(order);
  const { updateAmount } = useAmountUpdates();
  const { applyValidation } = useValidation();
  const { sendOrder } = useOrderActions();

  const handleApplyValidation = React.useCallback(() => {
    applyValidation(order, selectedLines, validationMode, () =>
      setSelectedLines([])
    );
  }, [order, selectedLines, validationMode, applyValidation, setSelectedLines]);

  const handleUpdateAmount = React.useCallback(
    (lineId: string, amount: number) => {
      updateAmount(order, lineId, amount);
    },
    [order, updateAmount]
  );

  const handleSendOrder = React.useCallback(() => {
    sendOrder(order);
  }, [order, sendOrder]);

  return {
    order,
    selectedLines,
    validationMode,
    actions: {
      toggleLine,
      toggleAll,
      setValidationMode,
      applyValidation: handleApplyValidation,
      updateAmount: handleUpdateAmount,
      sendOrder: handleSendOrder,
    },
  };
};
