import React, { useState, useEffect } from "react";
import {
  Box,
  Wrap,
  WrapItem,
  Text,
  Flex,
  Icon,
  Spacer,
  Select,
  Divider,
} from "@chakra-ui/react";
import { FiGrid, FiAlignJustify } from "react-icons/fi";

import ProductCard from "./productCard";
import { Product, ProductsList as ProductsListType } from "./types";
import ProductCardGrid from "./productCardGrid";
import { Link } from "react-router-dom";

interface props {
  products: ProductsListType;
}

const sortOptions = {
  price_lowest: "Price (Lowest)",
  price_highest: "Price (Highest)",
  name_az: "Name (A _ Z)",
  name_za: "Name (Z _ A)",
};

export default function ProductsList({ products }: props) {
  const [isGrid, setIsGrid] = useState(true);
  const [selectedSortOption, setSelectedSortOption] = useState(
    sortOptions.price_lowest
  );

  const initialSortedProducts = products.sort(
    (p1: Product, p2: Product) => p1.price - p2.price
  );

  const [sortedProducts, setSortedProducts] = useState(initialSortedProducts);

  useEffect(() => {
    console.log("sort option changed ");
    let tempSortedProducts = [...products];
    tempSortedProducts.sort(function (p1: Product, p2: Product): number {
      switch (selectedSortOption) {
        case "price_lowest":
          return p1.price - p2.price;

        case "price_highest":
          return p2.price - p1.price;

        case "name_az":
          return p1.name.toLowerCase() > p2.name.toLowerCase() ? 1 : -1;

        case "name_za":
          return p1.name.toLowerCase() < p2.name.toLowerCase() ? 1 : -1;
      }
    });

    setSortedProducts(tempSortedProducts);
  }, [selectedSortOption, sortedProducts, products]);

  return (
    <Box>
      <Box mb="7">
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
          <Text mx="2">{products.length} Products Found</Text>
          <Spacer />
          <Text>Sort By </Text>
          <Select
            ml="2"
            maxWidth="12rem"
            defaultValue={selectedSortOption}
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedSortOption(e.target.value);
            }}
          >
            {Object.keys(sortOptions).map((key, idx) => (
              <option key={idx} value={key}>
                {sortOptions[key]}
              </option>
            ))}
          </Select>
        </Flex>
      </Box>
      <Divider />
      {isGrid ? (
        <Wrap mt="4">
          {sortedProducts.map((product: Product) => {
            return (
              <Link key={product.id} to={"/products/" + product.id}>
                <WrapItem>
                  <ProductCardGrid {...product} />
                </WrapItem>
              </Link>
            );
          })}
        </Wrap>
      ) : (
        <Box>
          {sortedProducts.map((product: Product) => {
            return (
              <Box my="8">
                <Link key={product.id} to={"/products/" + product.id}>
                  <ProductCard {...product} />
                </Link>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
