import React, { useState, useEffect } from "react";
import ProductsList from "../components/products/productsList";
import { useFetch } from "../hooks/useFetch";
import { Stack, Box, Input, List, ListItem, Text } from "@chakra-ui/react";

import {
  Product,
  ProductsList as ProductsListType,
} from "../components/products/types";
import ProgressBar from "../components/shared/progressBar";

interface CategorieType {
  id: number;
  name: string;
}

export default function Products() {
  const { status, data } = useFetch("http://localhost:3000/products");
  const { status: fetchState, data: categories } = useFetch(
    "http://localhost:3000/categories"
  );
  const [filtredProducts, setFiltredProducts] = useState<ProductsListType>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    let tempFiltredProducts =
      selectedCategory === 0
        ? data
        : data.filter(
            (product: Product) => product.categoryId === selectedCategory
          );
    tempFiltredProducts = tempFiltredProducts.filter((product: Product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltredProducts(tempFiltredProducts);
  }, [search, selectedCategory, data]);

  return (
    <Stack mt="4" mx="20" spacing={8} direction={["column", "row"]}>
      <Box mt="2" mx="3">
        <Input
          variant="filled"
          placeholder="search"
          _focus={{
            border: "2px solid black",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <List spacing={1} my="2" color="rgb(97, 125, 152)">
          <ListItem>
            <Text color="rgb(16, 42, 66)" fontWeight="bold" fontSize="large">
              Category
            </Text>
          </ListItem>
          {categories.map((category: CategorieType, idx: any) => (
            <ListItem
              key={idx}
              mr="9rem"
              borderBottom={
                selectedCategory === category.id
                  ? "1px solid rgb(97, 125, 152)"
                  : null
              }
              onClick={() => setSelectedCategory(category.id)}
              cursor="pointer"
            >
              {category.name}
            </ListItem>
          ))}
        </List>
      </Box>

      <Box w="100%">
        {status === "fetching" ? (
          <ProgressBar />
        ) : filtredProducts.length === 0 ? (
          <h4>Sorry, no products matched your search.</h4>
        ) : (
          <Box w="100%">
            <ProductsList products={filtredProducts} />
          </Box>
        )}
      </Box>
    </Stack>
  );
}
