import React from "react";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "./productCard";
import { Product, ProductsList as ProductsListType } from "./types";
import ProductCardGrid from "./productCardGrid";

interface props {
  products: ProductsListType;
  isGrid?: Boolean;
}

export default function ProductsList({ products, isGrid = false }: props) {
  return (
    <Box>
      {isGrid ? (
        <Wrap>
          {products.map((product: Product) => {
            return (
              <WrapItem>
                <ProductCardGrid {...product} />
              </WrapItem>
            );
          })}
        </Wrap>
      ) : (
        <Box>
          {products.map((product: Product) => {
            return <ProductCard {...product} />;
          })}
        </Box>
      )}
    </Box>
  );
}
