import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Center from "../component/center/Center";
//import Sidebar from "./sidebar/sidebar";
import Stack from "@mui/material/Stack";

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7} textAlign="center ">
          <TextField id="fullWidth" label="Search"></TextField>
        </Grid>
        <Grid item xs={2}>
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
      <Stack direction="row" spacing={2}>
        <Center></Center>
      </Stack>
    </Box>
  );
}
