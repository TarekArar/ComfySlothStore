import React from "react";
import { Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  to: string;
}

const formatLink = (to: String) => {
  if (to === "Home") return "/";
  return `/${to.toLowerCase()}`;
};

export default function NavItem({ to }: Props) {
  const location = useLocation();
  const active = location.pathname.slice(1) === to.toLowerCase();

  return (
    <Text
      mx="2"
      cursor="pointer"
      _hover={{
        borderBottom: "2px solid black",
      }}
      borderBottom={active ? "2px solid black" : ""}
    >
      <Link to={formatLink(to)}>{to}</Link>
    </Text>
  );
}
