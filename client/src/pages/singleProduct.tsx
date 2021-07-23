import React from "react";
import { Flex, Heading, Image, Box, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import ProgressBar from "../components/shared/progressBar";

interface RouteParams {
  id: any;
}

export default function SingleProduct() {
  const { id } = useParams<RouteParams>();
  const { status, data } = useFetch("http://localhost:3000/products/" + id);
  const { cartItems, addProductToCard } = useCart();

  const { counter, incrementCounter, decrementCounter } = useCounter(1);

  return status === "fetching" ? (
    <ProgressBar />
  ) : (
    <Box mx="10rem" mt="2">
      <Button>
        <Link to="/products">Back to products</Link>{" "}
      </Button>
      <Flex mt="5">
        <Image boxSize="md" borderRadius="4" src={data.imageURL} />

        <Flex direction="column" ml="12" mb="20" justifyContent="space-between">
          <Heading as="h2">{data.name}</Heading>
          <Text color=" rgb(171, 122, 95)">${data.price}</Text>
          <Text>{data.overview}</Text>
          <Text>Available : In Stock</Text>
          <Text>SKU : RecQ0fMd8T0Vk211E</Text>
          <Text>Brand : Liddy</Text>
          <Flex w="7rem" alignItems="center" justifyContent="space-around">
            <Button onClick={decrementCounter}>-</Button>
            <Text>{counter}</Text>
            <Button onClick={incrementCounter}>+</Button>
          </Flex>
          {cartItems.find((item: any) => item.id === id) ? (
            <Button w="8rem" colorScheme="teal" disabled>
              In Cart
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              w="8rem"
              onClick={() => addProductToCard(data, counter)}
            >
              Add To Cart
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
