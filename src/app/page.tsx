"use client";
import { EducationCard, baseColor, borderColor } from "@/globalvar";
import {
  Box,
  Container,
  Heading,
  Stack,
  Card,
  Icon,
  Text,
  HStack,
  CardBody,
  Button,
} from "@chakra-ui/react";
import * as ReactIcon from "react-icons/ri";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <Container maxW={"container.lg"} my={10}>
      {/* Hero */}
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row-reverse" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"full"}
        my={5}
      >
        <Image
          height={"250"}
          width={"250"}
          src={"/profile.png"}
          alt="profile"
          className="mx-14 my-6"
        />
        <Stack textAlign={{ base: "center", md: "inherit" }}>
          <Text color={baseColor} fontWeight={"semibold"} fontSize={"lg"}>
            Hi my name is
          </Text>
          <Heading mb={3} size={"4xl"}>
            Steven Jaya
          </Heading>
          <Text
            fontStyle={"italic"}
            opacity={"0.8"}
            mb={2}
            fontSize={"xl"}
            data-aos="fade-up"
          >
            Designer, Web Developer, FrontEnd, BackEnd, Content Creator
          </Text>
          <Text
            fontSize={"lg"}
            data-aos="fade-left"
            data-aos-delay="300"
            mb={2}
          >
            Multimedia graduate from SMKN 6 Surabaya. A Programmer with 3 years
            experience. Own Ability to create websites. Excited inside learn new
            things, especially technology, discipline, honesty, and
            responsibility
          </Text>
          <NextLink
            data-aos="zoom-in"
            href="https://drive.google.com/file/d/1N1wsbvL328Ge8ZPeCOJNpVjVey55sKDs/view?usp=sharing"
            target="_blank"
            className="w-[100%] sm:w-[30%]"
          >
            <Button variant="outline" colorScheme="blue" w={"full"}>
              See My CV
            </Button>
          </NextLink>
        </Stack>
      </Box>

      {/* Education */}
      <Stack
        my={20}
        borderColor={borderColor}
        borderWidth={1}
        w={"full"}
        borderRadius={8}
        p={8}
      >
        <HStack w={"full"}>
          <Icon as={ReactIcon.RiBuilding2Line} w={6} h={6} />
          <Heading fontWeight={"bold"} size={"md"}>
            Education
          </Heading>
        </HStack>
        <Stack>
          {EducationCard.map((props: EducationCard) => {
            return (
              <Card
                key={props.name}
                as={motion.div}
                whileHover={{ scale: 1.01 }}
              >
                <CardBody>
                  <Heading size={"md"}>{props.name}</Heading>
                  <Text>{props.time}</Text>
                </CardBody>
              </Card>
            );
          })}
        </Stack>
      </Stack>

      <Footer />
    </Container>
  );
}
