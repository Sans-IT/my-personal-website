"use client";
import Footer from "@/components/Footer/Footer";
import { TechStack, ToolsUsed, hoverColor } from "@/globalvar";
import { baseColor } from "@/globalvar";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {};

function AboutPage({}: Props) {
  const textMode = useColorModeValue("black", "gray.400");

  const animateAbout = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const animateAboutItem = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <Container maxW={"container.xl"} my={10}>
      {/* About */}
      <Box my={10}>
        <Flex alignItems={"center"} gap={5} mb={10}>
          <Heading size={"lg"}>About me</Heading>
          <Box height={"0.3"} width={"30%"} bgColor={"gray.300"}></Box>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          gap={5}
          color={textMode}
        >
          <Text data-aos="fade-right" data-aos-delay="100">
            Hello, my name is Steven Jaya, I graduated from SMK Negeri 6
            Surabaya majoring in Multimedia in 2020-2023 who is interested in
            and experienced in Web development, UI design, Fotograpyh, Editing
            Photo/Video, and 3D Animation.
          </Text>
          <Text data-aos="fade-left" data-aos-delay="200">
            As a multimedia graduate student, I have knowledge and expertise in
            the field of design and the world of film, but no close the
            possibility to be able to create / manage websites and application
            because I`&apos;`ve been doing it since 2019
          </Text>
          <Text data-aos="fade-up" data-aos-delay="300">
            I am constantly striving to improve my skills and knowledge. I
            believe that ongoing training and personal projects are key to
            success. I am committed to staying up-to-date with the latest
            developments in my field and continuously expanding my knowledge and
            skills.
          </Text>
        </Flex>
      </Box>

      {/* TechStack */}
      <Box my={20}>
        <Box my={20}>
          <Flex alignItems={"center"} gap={5} mb={10}>
            <Box height={"0.3"} width={"5%"} bgColor={"gray.300"}></Box>
            <Heading size={"lg"}>Tech Stack</Heading>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={5}
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            variants={animateAbout}
            viewport={{ once: true }}
          >
            {TechStack.map((props: TechStack) => {
              return (
                <Box
                  key={props.name}
                  borderColor={baseColor}
                  py={5}
                  px={5}
                  borderRadius={5}
                  borderWidth={1}
                  w={"full"}
                  _hover={{ bgColor: "rgba(0, 200, 255, 0.1)" }}
                  cursor="pointer"
                  as={motion.div}
                  variants={animateAboutItem}
                >
                  <HStack>
                    <Image
                      src={`/techstack/${props.image_url}`}
                      width={"45px"}
                      height={"45px"}
                      alt="picture"
                      me={5}
                    />
                    <VStack alignItems={"start"}>
                      <Heading size={"md"}>{props.name}</Heading>
                      <Text size={"md"} color={baseColor}>
                        {props.level}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>

        {/* Tools */}
        <Box my={20}>
          <Flex alignItems={"center"} gap={5} mb={10}>
            <Box height={"0.3"} width={"5%"} bgColor={"gray.300"}></Box>
            <Heading size={"lg"}>Tools Used</Heading>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={5}
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animateAbout}
          >
            {ToolsUsed.map((props: ToolsUsed) => {
              return (
                <Box
                  key={props.name}
                  borderColor={baseColor}
                  py={5}
                  px={5}
                  borderRadius={5}
                  borderWidth={1}
                  w={"full"}
                  _hover={{ bgColor: "rgba(0, 200, 255, 0.1)" }}
                  cursor="pointer"
                  as={motion.div}
                  variants={animateAboutItem}
                >
                  <HStack>
                    <Image
                      src={`/tools/${props.image_url}`}
                      width={"45px"}
                      height={"45px"}
                      alt="picture"
                      me={5}
                    />
                    <VStack alignItems={"start"}>
                      <Heading size={"md"}>{props.name}</Heading>
                      <Text size={"md"} color={baseColor}>
                        {props.used}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}

export default AboutPage;
