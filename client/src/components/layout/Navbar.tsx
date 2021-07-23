import React from "react";
import { Flex, Box, Spacer, Center } from "@chakra-ui/react";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <Flex color="white" px="50" py="5">
      <Box w="150px">
        <img
          src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
          alt="icon"
        />
      </Box>
      <Spacer />
      <Center color="grey">
        {["Home", "About", "Products"].map((item) => (
          <NavItem to={item} />
        ))}
      </Center>
      <Spacer />
      <Center color="grey">
        {["Cart", "Login"].map((item) => (
          <NavItem to={item} />
        ))}
      </Center>
    </Flex>
  );
}
