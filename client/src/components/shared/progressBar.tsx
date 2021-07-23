import React from "react";
import { Center } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";

export default function ProgressBar() {
  return (
    <Center>
      <CircularProgress isIndeterminate color="#c5a491" />
    </Center>
  );
}
