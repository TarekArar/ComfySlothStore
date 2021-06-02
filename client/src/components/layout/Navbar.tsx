import React from "react";
import { Flex, Text, Box, Spacer, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Text
          mx="2"
          cursor="pointer"
          _hover={{
            borderBottom: "2px solid black",
          }}
        >
          <Link to="/">Home</Link>
        </Text>
        <Text
          mx="2"
          cursor="pointer"
          _hover={{
            borderBottom: "2px solid black",
          }}
        >
          <Link to="/about">About</Link>
        </Text>
        <Text
          mx="2"
          cursor="pointer"
          _hover={{
            borderBottom: "2px solid black",
          }}
        >
          <Link to="/products">Products</Link>
        </Text>
      </Center>
      <Spacer />
      <Center color="grey">
        <Box mx="2">
          <Text>Cart</Text>
        </Box>
        <Box mx="2">
          <Text>Login</Text>
        </Box>
      </Center>
    </Flex>
  );
}
