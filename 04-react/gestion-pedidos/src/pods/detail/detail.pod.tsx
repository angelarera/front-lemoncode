import React from "react";
import { OrderDetail } from "./detail.component";
import { useOrderDetailLogic } from "./hooks";

export const DetailPod: React.FC = () => {
  const { order, selectedLines, validationMode, actions } =
    useOrderDetailLogic();

  if (!order) return <div>Cargando pedido...</div>;

  return (
    <OrderDetail
      order={order}
      selectedLines={selectedLines}
      validationMode={validationMode}
      onToggleLine={actions.toggleLine}
      onToggleAll={actions.toggleAll}
      onUpdateAmount={actions.updateAmount}
      onSetValidationMode={actions.setValidationMode}
      onApplyValidation={actions.applyValidation}
      onSendOrder={actions.sendOrder}
    />
  );
};
