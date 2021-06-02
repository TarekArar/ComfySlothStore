import React from "react";
import { Flex, Text, Image, Box, Spacer } from "@chakra-ui/react";
import { Product } from "./types";

export default function ProductCard({
  name,
  price,
  imageURL,
  overview,
}: Product) {
  return (
    <Flex my="3">
      <Image
        borderRadius="4"
        height="200px"
        width="250px"
        src={imageURL}
        alt="product Image"
      />
      <Box mx="3">
        <Flex>
          <Text>{name}</Text>
          <Spacer />
          <Text>{price} $</Text>
        </Flex>

        <Text>{overview}</Text>
      </Box>
      {/* <Text>{overview}</Text> */}
    </Flex>
  );
}
