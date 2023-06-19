import { useState, MouseEvent } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  MenuItem,
  Link,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import followupLogo from "../assets/img/followupwrs@0.25x.png";

const pages = [
  { text: "Home", url: "/" },
  { text: "Mis propuestas", url: "/proposals" },
];

export default function ToolBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={followupLogo} style={{ width: "250px" }} />
          {/* SM menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Link
                    component={RouterLink}
                    key={page.text}
                    color="#2D404E"
                    to={page.url}
                    variant="body2"
                  >
                    {page.text}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* MD menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            style={{ justifyContent: "flex-end" }}
          >
            {pages.map((page) => (
              <Link
                component={RouterLink}
                key={page.text}
                sx={{ m: 2, color: "#2D404E", display: "block" }}
                to={page.url}
                variant="body2"
              >
                {page.text}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
