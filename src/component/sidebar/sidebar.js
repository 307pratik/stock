import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
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

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle2">Gain</Typography>
              <Typography variant="h6">+$10.670,00</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle2">Gain</Typography>
              <Typography variant="h6">+$10.670,00</Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Stack marginTop={2}>
        <Typography variant="h6">Recent Activites</Typography>

        <Box sx={{ flexGrow: 1 }} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="subtitle2">Crypto Bitcoin</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2">+16000</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="subtitle2">Profit 12%</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">10/11/2021</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <MonetizationOnOutlinedIcon></MonetizationOnOutlinedIcon>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="subtitle2">Crypto Bitcoin</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2">+16000</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="subtitle2">Profit 12%</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">10/11/2021</Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Stack marginTop={2}>
        <Typography variant="h6">Summary</Typography>

        <Box sx={{ flexGrow: 1 }} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Open</Typography>
              <Typography variant="h6">81,000</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">High</Typography>
              <Typography variant="h6">81,000</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">s2wk High</Typography>
              <Typography variant="h6">81,000</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Open</Typography>
              <Typography variant="h6">81,000</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">High</Typography>
              <Typography variant="h6">81,000</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2">s2wk High</Typography>
              <Typography variant="h6">81,000</Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </React.Fragment>
  );
}

export default Sidebar;
