import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import Typography from "@mui/material/Typography";

export default function Popular() {
  return (
    <Box
      sx={{
        width: 100,
        height: "auto",
        padding: 2,
        backgroundColor: "#f9fbe7",
      }}
    >
      <Grid>
        <Grid>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Grid>
            <Typography variant="h6">APLL</Typography>
            <Typography variant="caption">Apple</Typography>
          </Grid>
        </Grid>
        <Grid>
          <Typography variant="h6">$1200</Typography>{" "}
        </Grid>
        <Grid>
          <Typography variant="caption">20% this week</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
