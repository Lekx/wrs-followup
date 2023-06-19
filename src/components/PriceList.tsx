import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { CostConcept, PriceListProps } from "../shared/types";

export default function PriceList({ list }: PriceListProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Price list table">
        <TableBody>
          {list?.map((concept: CostConcept, index: number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography fontWeight={"bold"}>{concept.title}</Typography>
                {concept.description}
              </TableCell>

              <TableCell align="right">
                {concept.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
