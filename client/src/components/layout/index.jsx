import { Box } from "@chakra-ui/layout";
import React from "react";
import Navbar from "./Navbar";

export default function main({ children }) {
  return (
    <div>
      <Navbar />
      <Box bg="#EADED7" h="20" />
      {children}
    </div>
  );
}
