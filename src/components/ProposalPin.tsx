import { useState } from "react";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { proposalPinRef } from "../data/Firebase";
import { ProposalPinProps } from "../shared/types";

export default function ProposalPin({
  handleProposalCoverStorage,
  coverSpecialNote,
}: ProposalPinProps) {
  const [proposalPin, setProposalPin] = useState<string>("");
  const [openError, setOpenError] = useState<boolean>(false);
  const { proposalId } = useParams();

  const getProposalPin = async () => {
    try {
      const snapshot = await proposalPinRef(proposalId || "", proposalPin);
      const fetchedData = snapshot.val();
      if (fetchedData) {
        handleProposalCoverStorage();
      } else {
        setOpenError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAuthorization = () => {
    getProposalPin();
  };
  return (
    <>
      <Grid container spacing={2} m={{ sm: 2, md: 4 }}>
        <Grid item xs={12} md={8} mx={"auto"}>
          <Typography component="h1" variant="h5">
            Acceso a propuesta
          </Typography>
          <Typography>
            Por favor ingrese el número de PIN que le hicieron llegar por medio
            del correo electrónico junto a esta liga de acceso a su propuesta.
          </Typography>
        </Grid>
        <Grid item xs={7} mx={"auto"} textAlign={"center"}>
          <TextField
            id="outlined-error-helper-text"
            label="PIN de la propuesta"
            value={proposalPin}
            type="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setProposalPin(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={8} mx={"auto"} textAlign={"center"}>
          <Button
            variant="contained"
            onClick={getAuthorization}
            disabled={proposalPin === ""}
          >
            Ingresar
          </Button>
        </Grid>
      </Grid>

      {coverSpecialNote != undefined ? (
        <Grid sm={12} textAlign="center" mt={5}>
          <Typography color="red">{coverSpecialNote}</Typography>
        </Grid>
      ) : null}
      <Snackbar
        open={openError}
        autoHideDuration={5000}
        onClose={() => setOpenError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "400px", p: 1, mt: 8 }}>
          ¡PIN Incorrecto!
        </Alert>
      </Snackbar>
    </>
  );
}
