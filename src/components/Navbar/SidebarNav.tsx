import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Icon,
  Flex,
  VStack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import NextLink from "next/link";
import { NavbarLink } from "@/globalvar";
import ThemeButton from "../Button/ThemeButton";
import Footer from "../Footer/Footer";

export default function SidebarNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Icon
        ref={btnRef.current}
        onClick={onOpen}
        as={HiMenuAlt3}
        w={6}
        h={6}
        cursor={"pointer"}
        display={{ sm: "none" }}
        _hover={{ color: "blue.300" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody pt={"100px"}>
            <VStack gap={5}>
              {NavbarLink.map((props: navbarLink) => {
                return (
                  <Link
                    key={props.name}
                    as={NextLink}
                    href={props.value}
                    _hover={props.hover}
                    mx={2}
                    onClick={() => onClose()}
                  >
                    {props.name}
                  </Link>
                );
              })}
              <ThemeButton />
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Footer />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
