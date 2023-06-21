import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProposalBodyProps, Module, CostPayment } from "../shared/types";
import SimpleList from "./SimpleList";
import CostTable from "./CostTable";

const calculateFinalCost = (payments: CostPayment[] | undefined) => {
  let total: number | undefined = 1000.25;
  const res = payments?.map((elem: CostPayment) => {
    return elem.list[elem.list.length - 1].amount;
  });

  total = res?.reduce((acc: number, amount: number) => (acc += amount), 0);

  return total?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
export default function ProposalBody({ proposalData }: ProposalBodyProps) {
  return (
    <Box px={{ sm: 0, md: 4 }} py={5} bgcolor="white">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="summary-content"
          id="summary-header"
        >
          <Typography variant="h6" color="#2d404e">
            1. Resumen Ejecutivo.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography pb={2}>{proposalData?.summary.issue}</Typography>
          <Typography pb={2}>{proposalData?.summary.solution}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="modules-content"
          id="modules-header"
        >
          <Typography variant="h6" color="#2d404e">
            2. Alcance de desarrollo.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {proposalData?.modules.map((module: Module, id: number) => {
            return (
              <Box key={id}>
                <Typography pb={1} variant="subtitle1" fontWeight="bold">
                  2.{id + 1}. {module.title}
                </Typography>
                <Typography pb={1} variant="subtitle1">
                  {module.description}
                </Typography>
                <SimpleList list={module.subModules} />
              </Box>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sections-content"
          id="sections-header"
        >
          <Typography variant="h6" color="#2d404e">
            3. Otras Funcionalidades.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography pb={1} variant="subtitle1" fontWeight="bold">
            {proposalData?.sections.title}
          </Typography>
          <Typography pb={5}>{proposalData?.sections.description}</Typography>
          <SimpleList list={proposalData?.sections.list} numberedPrefix={3} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="techs-content"
          id="techs-header"
        >
          <Typography variant="h6" color="#2d404e">
            4. Tecnologías de desarrollo.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography pb={1} variant="subtitle1" fontWeight="bold">
            {proposalData?.techs.title}
          </Typography>
          <Typography pb={5}>{proposalData?.techs.description}</Typography>
          <SimpleList list={proposalData?.techs.list} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="deliverables-content"
          id="deliverables-header"
        >
          <Typography variant="h6" color="#2d404e">
            5. Entregables.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography pb={1} variant="subtitle1" fontWeight="bold">
            {proposalData?.deliverables.title}
          </Typography>
          <Typography pb={5}>
            {proposalData?.deliverables.description}
          </Typography>
          <SimpleList list={proposalData?.deliverables.subsections} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="cost-content"
          id="cost-header"
        >
          <Typography variant="h6" color="#2d404e">
            6. Costos.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography pb={1} variant="subtitle1" fontWeight="bold">
            {proposalData?.cost.title}
          </Typography>
          <Typography pb={5}>{proposalData?.cost.description}</Typography>
          <CostTable costs={proposalData?.cost.payments} />
          <Typography
            mx={{ sm: 0, md: 4 }}
            p={1}
            bgcolor="rgba(240, 246, 0, 0.5)"
          >
            <Typography component="label" fontWeight={"bold"}>
              Total del desarrollo
            </Typography>
            <Typography
              component="label"
              fontWeight={"bold"}
              sx={{ float: "right" }}
            >
              {calculateFinalCost(proposalData?.cost.payments)}
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="guarantee-content"
          id="guarantee-header"
        >
          <Typography variant="h6" color="#2d404e">
            7. Duración del proyecto y garantía.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography pb={1} variant="subtitle1" fontWeight="bold">
            {proposalData?.guarantee.title}
          </Typography>
          <Typography pb={5}>{proposalData?.guarantee.description}</Typography>
          <SimpleList list={proposalData?.guarantee.list} simpleList={true} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="terms-content"
          id="terms-header"
        >
          <Typography variant="h6" color="#2d404e">
            8. Términos y condiciones.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography pb={1} variant="subtitle1" fontWeight="bold">
            {proposalData?.terms.title}
          </Typography>
          <Typography pb={5}>{proposalData?.terms.description}</Typography>
          <SimpleList list={proposalData?.terms.list} numberedPrefix={8} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
