import { Alert, AlertTitle, Box, Typography } from "@mui/material";
import { ResourceGroup } from "../shared/types";
import { useResourcesData } from "../hooks/useResourcesData";
import Loader from "./Loader";
import LinkList from "./LinkList";

export default function ProposalResources() {
  const { isResourceLoading, resourceData } = useResourcesData();
  return (
    <Box py={5} px={{ xs: 2, md: 4 }} bgcolor={"white"}>
      {isResourceLoading ? (
        <Loader />
      ) : resourceData ? (
        resourceData?.map((resource: ResourceGroup, index: number) => {
          return (
            <Box mb={4} key={index}>
              <Typography variant="h6" fontWeight={"bold"} color="#b69f57">
                {resource.title}
              </Typography>
              <Typography>{resource.description}</Typography>
              <LinkList list={resource.list} />
            </Box>
          );
        })
      ) : (
        <Alert severity="warning">
          <AlertTitle>No se encontraron recursos</AlertTitle>
          Aún no se han agregado recursos a este proyecto, si crees que es un
          error, por favor póngase en contacto con su analista.
        </Alert>
      )}
    </Box>
  );
}
