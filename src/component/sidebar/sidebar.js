import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React from "react";
function Sidebar() {
  return (
    <React.Fragment>
      <Stack>
        <Typography variant="h6" padding={1}>
          My Portfolio
        </Typography>

        <Box sx={{ flexGrow: 1 }} textAlign="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={6} textAlign="start">
              <Typography variant="subtitle2">Gain</Typography>
              <Typography variant="h6">+$10.670,00</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} textAlign="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={6} textAlign="start">
              <Typography variant="subtitle2">Gain</Typography>
              <Typography variant="h6">+$10.670,00</Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Stack>
        <Typography variant="h6" padding={1}>
          Recent Activites
        </Typography>

        <Box sx={{ flexGrow: 1 }} textAlign="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={6} textAlign="start">
              <Typography variant="subtitle2">Gain</Typography>
              <Typography variant="h6">+$10.670,00</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} textAlign="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={6} textAlign="start">
              <Typography variant="subtitle2">Gain</Typography>
              <Typography variant="h6">+$10.670,00</Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Stack>
        <Typography variant="h6" padding={1}>
          Summary
        </Typography>

        <Box sx={{ flexGrow: 1 }} textAlign="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={6} textAlign="start">
              <Typography variant="subtitle2">Gain</Typography>
              <Typography variant="h6">+$10.670,00</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} textAlign="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={6} textAlign="start">
              <Typography variant="subtitle2">Gain</Typography>
              <Typography variant="h6">+$10.670,00</Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </React.Fragment>
  );
}

export default Sidebar;
