import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={2}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
