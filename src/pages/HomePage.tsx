import { Helmet } from "react-helmet";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import HomeCustomer from "../assets/img/home-customer.svg";
import HomeTool from "../assets/img/home-tool.svg";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Followup - Inicio</title>
      </Helmet>
      <Box component="main" mx={{ sm: 2, md: 4 }} my={8}>
        <Container maxWidth="xl" component="div">
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={6}
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="350px"
            >
              <Box textAlign="left">
                <Typography variant="h4" component="h1">
                  Tu herramienta de seguimiento.
                </Typography>
                <Typography variant="body1" my={4}>
                  Hemos desarrollado la mejor herramienta para que puedas tener
                  un control total sobre el avance de tus proyectos con nosotros
                  y lo mejor es que es super fácil de usar.
                </Typography>
                <Link
                  component={RouterLink}
                  sx={{ color: "white" }}
                  to="proposals/demo"
                  bgcolor="#0D5187"
                  fontWeight="bold"
                  borderRadius={1}
                  p={2}
                >
                  Ver proyecto de prueba
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center" mt={{ xs: 5, md: 0 }}>
                <img
                  src={HomeCustomer}
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    display: "inline-block",
                  }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              mt={5}
              display={{ xs: "none", md: "block" }}
            >
              <Box textAlign="center">
                <img
                  src={HomeTool}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    display: "inline-block",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              mt={{ xs: 0, md: 5 }}
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="350px"
            >
              <Box textAlign="left">
                <Typography component="h1" variant="h4">
                  Estatus del proyecto en tiempo y forma.
                </Typography>
                <ul>
                  <li>Propuesta para tu proyecto</li>
                  <li>Seguimiento de objetivos</li>
                  <li>Requisiciones</li>
                  <li>Control de recursos</li>
                  <li>Sin registrar tu correo</li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
