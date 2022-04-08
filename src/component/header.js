import * as React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Center from "../component/center/Center";
import Sidebar from "./sidebar/sidebar";
import Stack from "@mui/material/Stack";

export default function BasicGrid() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} alignItems="center" margin={1}>
          <Grid item xs={6}>
            <TextField fullWidth size="small" label="Search"></TextField>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Typography variant="subtitle2" gutterBottom component="div">
              saturday, 20 October 2021
            </Typography>
          </Grid>
          <Grid item xs={1 / 2}>
            <NotificationsNoneIcon></NotificationsNoneIcon>
          </Grid>
          <Grid item xs={1 / 2}>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Grid>
        </Grid>
        <Divider />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Center></Center>
          </Grid>
          <Grid item xs={3}>
            <Sidebar></Sidebar>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
