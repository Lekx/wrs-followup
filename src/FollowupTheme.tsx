import createTheme from "@mui/material/styles/createTheme";

export const FollowupTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          place-items: start start;
          padding-top: 50px;
          background-color: #F5F9F9;
          color: #2D404E;
        }
        #root{
          margin: auto;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#F5F9F9",
          color: "#2D404E",
        },
      },
    },
  },
});
