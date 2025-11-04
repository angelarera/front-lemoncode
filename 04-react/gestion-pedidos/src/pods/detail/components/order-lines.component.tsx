import React from "react";
import {
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { OrderLine } from "../detail.vm";

interface Props {
  lines: OrderLine[];
  selectedLines: string[];
  onToggleLine: (lineId: string) => void;
  onToggleAll: () => void;
  onUpdateAmount: (lineId: string, amount: number) => void;
}

export const OrderLines: React.FC<Props> = (props) => {
  const { lines, selectedLines, onToggleLine, onToggleAll, onUpdateAmount } =
    props;

  const allSelected = lines.length > 0 && selectedLines.length === lines.length;
  const indeterminate =
    selectedLines.length > 0 && selectedLines.length < lines.length;

  const getStatusChip = (validated: boolean) => {
    return validated ? (
      <Chip label="Validado" color="success" size="small" />
    ) : (
      <Chip label="Pendiente" color="warning" size="small" />
    );
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="order lines table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={indeterminate}
                checked={allSelected}
                onChange={onToggleAll}
              />
            </TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell align="right">Importe (€)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lines.map((line) => (
            <TableRow key={line.id}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedLines.includes(line.id)}
                  onChange={() => onToggleLine(line.id)}
                />
              </TableCell>
              <TableCell>{getStatusChip(line.validated)}</TableCell>
              <TableCell>{line.article}</TableCell>
              <TableCell align="right">
                <input
                  type="number"
                  value={line.amount}
                  onChange={(e) =>
                    onUpdateAmount(line.id, Number(e.target.value))
                  }
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    textAlign: "right",
                    width: "100px",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
