"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Container,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Box,
  IconButton,
  useColorMode,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";
import SidebarNav from "./SidebarNav";
import { baseColor, hoverColor, NavbarLink } from "@/globalvar";
import ThemeButton from "../Button/ThemeButton";

type Props = {};

export default function Navbar({}: Props) {
  const ThemeMode = useColorModeValue("white", "gray.800");
  return (
    <Box
      w={"auto"}
      px={{ base: 3, sm: 10 }}
      py={{ base: 3, sm: 4 }}
      display={"flex"}
      alignItems="center"
      gap="2"
      justifyContent={"space-between"}
      position={"sticky"}
      width={"full"}
      shadow={"md"}
      top={0}
      bg={ThemeMode}
      zIndex={1000}
    >
      <Box>
        <Link
          as={NextLink}
          href={"/"}
          color={baseColor}
          _hover={{ fontStyle: "normal", color: hoverColor }}
        >
          <Heading size={"lg"}>Steven Jaya</Heading>
        </Link>
      </Box>
      <Box>
        <SidebarNav />
        <Flex gap={5} display={{ base: "none", sm: "inherit" }}>
          {NavbarLink.map((props: navbarLink) => {
            return (
              <Link
                key={props.name}
                as={NextLink}
                href={props.value}
                _hover={props.hover}
                mx={2}
              >
                {props.name}
              </Link>
            );
          })}
        </Flex>
      </Box>
      <ButtonGroup gap="2" display={{ base: "none", sm: "inherit" }}>
        <ThemeButton />
      </ButtonGroup>
    </Box>
  );
}
