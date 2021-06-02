import React from "react";
import { Flex, Text, Image, Box, Spacer } from "@chakra-ui/react";
import { Product } from "./types";

export default function ProductCardGrid({ name, price, imageURL }: Product) {
  return (
    <Box>
      <Image
        borderRadius="4"
        height="200px"
        width="250px"
        src={imageURL}
        alt="product Image"
      />
      <Flex>
        <Text>{name}</Text>
        <Spacer />
        <Text>{price} $</Text>
      </Flex>
    </Box>
  );
}
