import Header from "./component/header";
import Stack from "@mui/material/Stack";
import Center from "./component/center/Center";
import ResponsiveDrawer from "./component/ResponsiveDrawer";
import React from "react";

function App() {
  return (
    <Stack direction="row">
      <ResponsiveDrawer></ResponsiveDrawer>
      <Header></Header>
    </Stack>
  );
}

export default App;
