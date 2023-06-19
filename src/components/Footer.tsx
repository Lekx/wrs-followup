import { Container, Typography, Link, Grid, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      p={4}
      sx={{ backgroundColor: "#2D404E", color: "white" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h6" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body2">
              Correo electrónico: hola@webrocket.services
            </Typography>
            <Typography variant="body2">Teléfono: 333 000 0000</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" align="center">
              {"Copyright © "}
              <br />
              <Link
                color="inherit"
                href="https://webrocket.services/"
                target="_blank"
              >
                Web Rocket Services
              </Link>
              <br />
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "right" } }}
          >
            <Typography variant="h6" gutterBottom>
              Followup By WRS
            </Typography>
            <Typography variant="body2">
              Esta plataforma ha sido creada por Web Rocket Services donde
              automatizamos tus ideas de negocio.
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}></Box>
      </Container>
    </Box>
  );
}
