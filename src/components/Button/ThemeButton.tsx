import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { hoverColor } from "@/globalvar";

type Props = {};

export default function ThemeButton({}: Props) {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      aria-label="theme"
      icon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
      onClick={toggleColorMode}
      _hover={{ bgColor: "transparent", color: hoverColor }}
      bgColor={"transparent"}
    />
  );
}
