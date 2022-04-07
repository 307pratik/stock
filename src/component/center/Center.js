import Trending from "./trending";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popular from "./popular";
import Stack from "@mui/material/Stack";
import Transaction from "./transaction";
import Sidebar from "../sidebar/sidebar";
function Center() {
  return (
    <Stack direction="row">
      <Stack marginLeft={2}>
        <Typography variant="h4">Stock Market</Typography>
        <Typography variant="caption">Trending Market Group</Typography>
        <Box component="span" sx={{ p: 0 }} textAlign="end">
          <Button>View all</Button>
        </Box>
        <Stack direction="row" spacing={5}>
          <Trending></Trending>
          <Trending></Trending>
        </Stack>
        <Typography variant="h6" padding={1}>
          Most Popular week
        </Typography>

        <Stack direction="row" spacing={5}>
          <Popular></Popular>
          <Popular></Popular>
          <Popular></Popular>
          <Popular></Popular>
        </Stack>
        <Typography variant="h6" padding={1}>
          Transaction
        </Typography>
        <Transaction></Transaction>
        <Transaction></Transaction>
      </Stack>
      <Stack marginLeft={2}>
        <Sidebar></Sidebar>
      </Stack>
    </Stack>
  );
}

export default Center;
