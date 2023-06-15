import { Box, Typography } from "@mui/material";
import { CostPayment } from "../shared/types";
import PriceList from "./PriceList";

interface PropsDef {
  costs: CostPayment[] | undefined;
}
export default function CostTable({ costs }: PropsDef) {
  return (
    <>
      {costs?.map((cost: CostPayment, index: number) => {
        return (
          <Box key={index} mx={5} my={2}>
            <Typography
              color="#b69f57"
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
