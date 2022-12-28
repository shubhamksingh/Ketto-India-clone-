import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Box } from "@chakra-ui/react";
export const SharedComponent = () => {
  return (
    <Box w='100%' /*border='1px solid red'*/>
      <Navbar />

      <Outlet />
      
      <Footer />
    </Box>
  );
};
