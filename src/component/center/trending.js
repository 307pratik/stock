import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

export default function Trending() {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: 300,
          height: 150,
          backgroundColor: "#e0e0e0",
        }}
      >
        <Grid container>
          <Grid item xs={9} alignItems="center">
            <Grid>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Grid>
            <Grid>
              <Typography variant="h6">APLL</Typography>
              <Typography variant="caption">Apple</Typography>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item xs={7} textAlign="center">
            <Typography variant="h6">Graph</Typography>
          </Grid>
          <Grid item xs={5}>
            <h3>$10.390,00</h3>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
