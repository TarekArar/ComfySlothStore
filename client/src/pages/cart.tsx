import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";

import { useCart } from "../context/cartContext";

export default function Cart() {
  // const { status, data } = useFetch("http://localhost:3000/products");
  const { cartItems, incrementCount, decrementCount } = useCart();

  console.log(cartItems);

  return (
    <Flex mx="20" mt="3">
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th isNumeric>Price</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Subtotal</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((cartItem: any) => {
            return (
              <Tr>
                <Td>
                  <Image w="5rem" h="4rem" src={cartItem.imageURL} />
                </Td>
                <Td isNumeric>{cartItem.price} $</Td>
                <Td isNumeric>
                  {" "}
                  <Text>
                    <Flex alignItems="center" justifyContent="space-around">
                      <Button onClick={() => decrementCount(cartItem.id)}>
                        -
                      </Button>
                      <Text>{cartItem.count}</Text>
                      <Button onClick={() => incrementCount(cartItem.id)}>
                        +
                      </Button>
                    </Flex>
                  </Text>
                </Td>
                <Td isNumeric>{cartItem.count * cartItem.price}</Td>
              </Tr>
            );
          })}

          {/* <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
            <Td isNumeric>0.91444</Td>
          </Tr> */}
        </Tbody>
      </Table>
    </Flex>
  );
}
