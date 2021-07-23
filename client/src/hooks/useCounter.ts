import { useState } from "react";

export default function useCounter(initialValue: number) {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter((c: number) => c + 1);
  };
  const decrementCounter = () => {
    counter !== 1 && setCounter((c: number) => c - 1);
  };

  return { counter, incrementCounter, decrementCounter };
}
