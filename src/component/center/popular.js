import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
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
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Grid marginTop={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6">APLL</Typography>
            <Typography variant="caption">Apple</Typography>
          </Stack>
        </Grid>

        <Grid>
          <Typography variant="h6">$1200</Typography>
        </Grid>
        <Grid>
          <Typography variant="caption">20% this week</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
