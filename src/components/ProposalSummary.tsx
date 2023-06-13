import { Button, Chip, Grid, Tooltip, Typography } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import EventIcon from "@mui/icons-material/Event";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function ProposalSummary(props: any) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Typography component="h1" variant="h4">
          {props.proposalCover.title}
        </Typography>
        <Typography component="h2" variant="h5">
          {props.proposalCover.companyName}
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={props.proposalCover.companyLogo}
          style={{
            maxWidth: "100%",
            margin: "auto",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Tooltip title="Versión de la propuesta.">
          <Typography mr={1} my={1} component="div" display={"inline-block"}>
            <Chip
              label={props.proposalCover.version}
              icon={<FolderOpenIcon />}
            />
          </Typography>
        </Tooltip>
        <Tooltip title="Fecha de creación de la propuesta.">
          <Typography mr={1} my={1} component="div" display={"inline-block"}>
            <Chip
              label={`${props.proposalCover.displayDate || "-"}`}
              icon={<EventIcon />}
            />
          </Typography>
        </Tooltip>
        <Tooltip title="Analista del proyecto">
          <Typography mr={1} my={1} component="div" display={"inline-block"}>
            <Chip
              label={`Por ${props.proposalCover.analyst || "-"}`}
              icon={<SupportAgentIcon />}
            />
          </Typography>
        </Tooltip>
        {props.proposalCover.acceptedAt === "" ? (
          <Button variant="contained" color="success">
            Aceptar propuesta
          </Button>
        ) : (
          <Tooltip title="Fecha de aceptación de la propuesta">
            <Typography mr={1} my={1} component="div" display={"inline-block"}>
              <Chip
                color="success"
                label={`Aceptado el ${props.proposalCover.acceptedAt || "-"}`}
                icon={<EventAvailableIcon />}
              />
            </Typography>
          </Tooltip>
        )}
      </Grid>
    </Grid>
  );
}
