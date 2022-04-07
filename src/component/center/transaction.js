import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Transaction() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2" gutterBottom component="div">
            Buy Apple stock
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Stock investment
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2" gutterBottom component="div">
            Interest Rate 2%
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2" gutterBottom component="div">
            $20.352
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
