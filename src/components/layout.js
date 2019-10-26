import React from "react";
import { Box } from "@theme-ui/components";
import "./layout.css";

const Layout = ({ children }) => (
  <main>
    <Box p={0} bg="primary" color="white">
      {children}
    </Box>
  </main>
);

export default Layout;
