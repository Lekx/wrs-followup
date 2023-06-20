import { Box, Typography } from "@mui/material";
import { CostPayment, CostTableProps } from "../shared/types";
import PriceList from "./PriceList";

export default function CostTable({ costs }: CostTableProps) {
  return (
    <>
      {costs?.map((cost: CostPayment, index: number) => {
        return (
          <Box key={index} mx={{ sm: 0, md: 4 }} my={2}>
            <Typography
              color="#2d404e"
              mb={2}
              variant="subtitle1"
              fontWeight={"bold"}
            >
              {cost.title}
            </Typography>
            <PriceList list={cost.list} />
          </Box>
        );
      })}
    </>
  );
}
