import React, { useState } from "react";
import { Text, Flex, Button } from "@chakra-ui/react";

interface props {
  initialCount?: number;
}

const Counter = ({ initialCount = 1 }: props) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount((c: number) => c + 1);
  };
  const decrementCount = () => {
    count !== 0 && setCount((c: number) => c - 1);
  };

  return (
    <Flex alignItems="center" justifyContent="space-around">
      <Button onClick={decrementCount}>-</Button>
      <Text>{count}</Text>
      <Button onClick={incrementCount}>+</Button>
    </Flex>
  );
};

export default Counter;
