import React from "react";
import createTheme from "@mui/material/styles/createTheme";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { LinkProps } from "@mui/material/Link";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

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
        main{
          min-height: calc(100vh - 355px);
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
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});
