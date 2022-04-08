import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ResponsiveDrawer from "./component/ResponsiveDrawer";
import Header from "./component/header";
import { Route } from "react-router-dom";
import Market from "./component/market";
import Portfolio from "./component/portfolio";
import News from "./component/news";
import Settings from "./component/settings";
export default function App() {
  return (
    <React.Fragment>
      <Route path="/" exact>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <ResponsiveDrawer></ResponsiveDrawer>
            </Grid>
            <Grid item xs={10}>
              <Header></Header>
            </Grid>
          </Grid>
        </Box>
      </Route>
      <Route path="/market">
        <Market />
        <ResponsiveDrawer></ResponsiveDrawer>
      </Route>
      <Route path="/portfolio">
        <Portfolio />
        <ResponsiveDrawer></ResponsiveDrawer>
      </Route>
      <Route path="/news">
        <News />
        <ResponsiveDrawer></ResponsiveDrawer>
      </Route>
      <Route path="/settings">
        <Settings />
        <ResponsiveDrawer></ResponsiveDrawer>
      </Route>
    </React.Fragment>
  );
}
