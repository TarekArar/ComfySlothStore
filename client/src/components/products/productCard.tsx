import React from "react";
import { Flex, Text, Image, Spacer, Button, Stack } from "@chakra-ui/react";
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
        boxSize="15rem"
        objectFit="cover"
        src={imageURL}
        alt="product Image"
      />
      <Stack spacing={3} mx="4">
        <Flex>
          <Text>{name}</Text>
          <Spacer />
          <Text color=" rgb(171, 122, 95)">${price}</Text>
        </Flex>

        <Text>{overview.substring(1, 200)} ...</Text>
        <Button w="fit-content">Details</Button>
      </Stack>
      {/* <Text>{overview}</Text> */}
    </Flex>
  );
}
