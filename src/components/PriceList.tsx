import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CostConcept, PriceListProps } from "../shared/types";
import { Typography } from "@mui/material";

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
