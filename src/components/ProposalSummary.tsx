import { Button, Chip, Grid, Tooltip, Typography } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import EventIcon from "@mui/icons-material/Event";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { ProposalSummaryProps } from "../shared/types";

export default function ProposalSummary({
  proposalCover,
}: ProposalSummaryProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={10}>
        <Typography component="h1" variant="h4">
          {proposalCover.title}
        </Typography>
        <Typography component="h2" variant="h5">
          {proposalCover.companyName}
        </Typography>
      </Grid>
      <Grid
        item
        xs={8}
        md={2}
        sx={{ display: "flex", justifyContent: "center" }}
        m="auto"
      >
        <img
          src={proposalCover.rejectedAt ? "" : proposalCover.companyLogo}
          style={{
            maxWidth: "100%",
            maxHeight: "100px",
            margin: "auto",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Tooltip title="Versión de la propuesta.">
          <Typography mr={1} my={1} component="div" display={"inline-block"}>
            <Chip label={proposalCover.version} icon={<FolderOpenIcon />} />
          </Typography>
        </Tooltip>
        <Tooltip title="Fecha de creación de la propuesta.">
          <Typography mr={1} my={1} component="div" display={"inline-block"}>
            <Chip
              label={`${proposalCover.displayDate || "-"}`}
              icon={<EventIcon />}
            />
          </Typography>
        </Tooltip>
        {proposalCover.rejectedAt ? (
          <Tooltip title="Fecha de rechazo de la propuesta">
            <Typography mr={1} my={1} component="div" display={"inline-block"}>
              <Chip
                color="error"
                label={`Rechazado el ${proposalCover.rejectedAt || "-"}`}
                icon={<EventAvailableIcon />}
              />
            </Typography>
          </Tooltip>
        ) : (
          <Tooltip title="Analista del proyecto">
            <Typography mr={1} my={1} component="div" display={"inline-block"}>
              <Chip
                label={`Por ${proposalCover.analyst || "-"}`}
                icon={<SupportAgentIcon />}
              />
            </Typography>
          </Tooltip>
        )}
        {proposalCover.rejectedAt ? (
          ""
        ) : proposalCover.acceptedAt === "" ? (
          <Button variant="contained" color="success">
            Aceptar propuesta
          </Button>
        ) : (
          <Tooltip title="Fecha de aceptación de la propuesta">
            <Typography mr={1} my={1} component="div" display={"inline-block"}>
              <Chip
                color="success"
                label={`Aceptado el ${proposalCover.acceptedAt || "-"}`}
                icon={<EventAvailableIcon />}
              />
            </Typography>
          </Tooltip>
        )}
      </Grid>
    </Grid>
  );
}
