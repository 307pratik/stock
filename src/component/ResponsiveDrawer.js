import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { MenuItem, MenuList } from "@mui/material";

const drawerWidth = 210;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <React.Fragment>
      <Box textAlign="center" margin={2}>
        <Typography variant="h6" gutterBottom component="div">
          STOCKIN
        </Typography>
        <Divider width="100%" />
      </Box>
      <Box>
        <MenuList>
          <Stack>
            <Link to="/market">
              <MenuItem> Market </MenuItem>
            </Link>

            <Link to="/">
              <MenuItem> Dashboard </MenuItem>
            </Link>
            <Link to="/portfolio">
              <MenuItem> Portfolio </MenuItem>
            </Link>
            <Link to="/news">
              <MenuItem> News </MenuItem>
            </Link>
            <Link to="/settings">
              <MenuItem> Settings </MenuItem>
            </Link>
          </Stack>
        </MenuList>
      </Box>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        ></Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
