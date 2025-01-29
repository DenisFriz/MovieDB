import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchBar from "@components/SearchBar/SearchBar";
import { Link, Outlet } from "react-router-dom";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

const Layout = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="h4" noWrap>
              Movies
            </Typography>
          </Link>
          <SearchBar />
          <Box
            sx={{
              marginLeft: {
                xs: "none",
                md: "auto",
              },
            }}
          >
            <ThemeSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component={"main"}
        sx={{
          marginTop: {
            md: "64px",
            sm: "120px",
            xs: "160px",
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
