"use client";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { SosmedLink, baseColor } from "@/globalvar";

export default function Footer() {
  return (
    <Box mx={"auto"} textAlign={"center"} w={"full"} my={10}>
      <Flex gap={5} alignItems={"center"} justifyContent={"center"} mb={5}>
        {SosmedLink.map((props: SosmedLink) => {
          return (
            <NextLink
              key={props.link}
              href={props.link}
              target="_blank"
              className={`hover:text-[${baseColor}] transition duration-300`}
            >
              <Icon as={props.icon} boxSize={6} />
            </NextLink>
          );
        })}
      </Flex>
      <Text color={"gray.500"}>
        © {new Date().getFullYear()} Steven Jaya. All rights reserved
      </Text>
    </Box>
  );
}
