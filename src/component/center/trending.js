import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Trending() {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: 300,
          height: "auto",
          backgroundColor: "#f9fbe7",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Stack direction="row">
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Grid margin={1}>
                <Typography variant="h6">APLL</Typography>

                <Typography variant="caption" display="block" gutterBottom>
                  Apple
                </Typography>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <h3>$10.390,00</h3>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
