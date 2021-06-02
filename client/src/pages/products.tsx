import React, { useState, useMemo } from "react";
import ProductsList from "../components/products/productsList";
import { useFetch } from "../hooks/useFetch";
import {
  Grid,
  GridItem,
  CircularProgress,
  Input,
  List,
  ListItem,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";

import { Product } from "../components/products/types";

import { FiGrid, FiAlignJustify } from "react-icons/fi";

export default function Products() {
  const { status, data } = useFetch("http://localhost:3000/products");
  const [isGrid, setIsGrid] = useState(true);
  const [search, setSearch] = useState("");

  const filtredProducts = useMemo(() => {
    return search
      ? data.filter((product: Product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      : data;
  }, [search]);

  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      mx="20"
      my="5"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} mx="3">
        <Input
          variant="filled"
          placeholder="search"
          _focus={{
            border: "2px solid black",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <List spacing={1} my="2" color=" rgb(97, 125, 152)">
          <ListItem>
            <Text colro="rgb(16, 42, 66)" fontWeight="bold" fontSize="large">
              Category
            </Text>
          </ListItem>
          <ListItem cursor="pointer">All</ListItem>
          <ListItem cursor="pointer">Office</ListItem>
          <ListItem cursor="pointer">Living Room</ListItem>
          Kitchen
          <ListItem cursor="pointer">Bedroom</ListItem>
          <ListItem cursor="pointer">Dinning</ListItem>
          <ListItem cursor="pointer">Kids</ListItem>
        </List>
      </GridItem>

      <GridItem colSpan={4}>
        <Flex alignItems="center">
          <Icon
            onClick={(e: any) => setIsGrid(true)}
            as={FiGrid}
            w={5}
            h={5}
            mx="2"
          />
          <Icon
            onClick={(e: any) => setIsGrid(false)}
            as={FiAlignJustify}
            w={5}
            h={5}
            mx="2"
          />
          <Text mx="2">{filtredProducts.length} Products Found</Text>
        </Flex>
      </GridItem>

      <GridItem colSpan={4} bg="papayawhip">
        {status === "fetching" ? (
          <CircularProgress isIndeterminate color="green.300" />
        ) : filtredProducts.length === 0 ? (
          <h4>Sorry, no products matched your search.</h4>
        ) : (
          <ProductsList products={filtredProducts} isGrid={isGrid} />
        )}
      </GridItem>
    </Grid>

    //   <GridItem rowSpan={2} colSpan={1} bg="tomato" />
    //   <GridItem colSpan={2} bg="papayawhip" />
    //   <GridItem colSpan={2} bg="papayawhip" />
    //   <GridItem colSpan={4} bg="tomato" />
    // </Grid>
  );
}
