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

  const { order, setOrder, validationMode, setValidationMode } =
    useOrderDetail(id);
  const { selectedLines, toggleLine, toggleAll, setSelectedLines } =
    useLineSelection(order);
  const { updateAmount } = useAmountUpdates(order, setOrder);
  const { applyValidation } = useValidation(order, setOrder);
  const { sendOrder } = useOrderActions(order, setOrder);

  const handleApplyValidation = () => {
    applyValidation(selectedLines, validationMode, () => setSelectedLines([]));
  };

  if (!order) return <div>Cargando pedido...</div>;

  return (
    <OrderDetail
      order={order}
      selectedLines={selectedLines}
      validationMode={validationMode}
      onToggleLine={toggleLine}
      onToggleAll={toggleAll}
      onUpdateAmount={updateAmount}
      onSetValidationMode={setValidationMode}
      onApplyValidation={handleApplyValidation}
      onSendOrder={sendOrder}
    />
  );
};
