import React from "react";
import { useParams } from "react-router-dom";
import {
  useAmountUpdates,
  useLineSelection,
  useOrderActions,
  useOrderDetail,
  useValidation,
} from "./hooks";
import { OrderDetail } from "./detail.component";

export const DetailPod: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { order, validationMode, setValidationMode, updateOrder } =
    useOrderDetail(id);
  const { selectedLines, toggleLine, toggleAll, setSelectedLines } =
    useLineSelection(order);
  const { updateAmount } = useAmountUpdates();
  const { applyValidation } = useValidation();
  const { sendOrder } = useOrderActions();

  const handleApplyValidation = () => {
    applyValidation(order, selectedLines, validationMode, () =>
      setSelectedLines([])
    );
  };

  const handleUpdateAmount = (lineId: string, amount: number) => {
    updateAmount(order, lineId, amount);
  };

  const handleSendOrder = () => {
    sendOrder(order);
  };

  if (!order) return <div>Cargando pedido...</div>;

  return (
    <OrderDetail
      order={order}
      selectedLines={selectedLines}
      validationMode={validationMode}
      onToggleLine={toggleLine}
      onToggleAll={toggleAll}
      onUpdateAmount={handleUpdateAmount}
      onSetValidationMode={setValidationMode}
      onApplyValidation={handleApplyValidation}
      onSendOrder={handleSendOrder}
    />
  );
};
