import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Link,
  Typography,
} from "@mui/material";
import { Cover } from "../shared/types";

export default function ProposalsPage() {
  const [proposalsList, setProposalsList] = useState<Cover[] | null>(null);
  const deleteLocalStorage = () => {
    setProposalsList(null);
    localStorage.removeItem("wrs-followup-proposals");
  };
  useEffect(() => {
    const localStorageData = localStorage.getItem("wrs-followup-proposals");
    if (localStorageData) {
      setProposalsList(JSON.parse(localStorageData));
    }
  }, []);
  return (
    <Box component="main" mx={{ sm: 0, md: 4 }} my={8}>
      <Container maxWidth="xl" component="div">
        <Typography variant="h5" mb={2}>
          Mis propuestas
        </Typography>
        <Typography>
          Aqui se listan todas las propuestas que hayas recordado despues de
          abrirlas mediante el link que te hicimos llegar a tu correo.
        </Typography>
        {!proposalsList ? (
          <Box py={5}>
            <Alert severity="warning">
              <AlertTitle>No se encontraron propuestas</AlertTitle>
              No has guardado ninguna propuesta en tu navegador.
            </Alert>
          </Box>
        ) : (
          <>
            <Box p={5}>
              {proposalsList?.map((proposalCover: Cover) => {
                return (
                  <Link
                    pb={2}
                    component={RouterLink}
                    key={proposalCover.uid}
                    to={proposalCover.uid}
                    display="block"
                  >
                    <li>
                      {proposalCover.folio} | {proposalCover.title} de "
                      {proposalCover.companyName}"
                    </li>
                  </Link>
                );
              })}
            </Box>
            <Box textAlign="right">
              <Typography variant="caption" component="div" my={2}>
                Haz click en el siguiente boton para borrar las propuestas que
                esten guardadas en tu navegador.
              </Typography>
              <Button
                onClick={deleteLocalStorage}
                variant="outlined"
                color="error"
              >
                Borrar
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
