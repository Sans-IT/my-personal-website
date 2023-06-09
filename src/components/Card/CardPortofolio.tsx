import {
  Card,
  Box,
  LinkOverlay,
  AbsoluteCenter,
  CardBody,
  VStack,
  Heading,
  Button,
  Text,
  SimpleGrid,
  Flex,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import NextLink from "next/link";
import { certificatePortofolio } from "@/globalvar";

type Props = {
  params: {
    portofolio: "project" | "certificate";
  };
};

export default function CardPortofolio({ params }: Props) {
  const [data, setData] = useState<PortofolioProps[]>([]);

  const URL_API =
    "https://docs.google.com/spreadsheets/d/1v7bjYx_D6UPRYle1zst8tZzHDRmFgmbvar22XjbxHbw/gviz/tq?/sheet=Profile";

  const { isLoading } = useQuery({
    queryKey: ["getportofolio", params.portofolio],
    queryFn: async () => {
      await fetch(URL_API)
        .then((res) => res.text())
        .then((res) => {
          const API = JSON.parse(res.substr(47).slice(0, -2));
          const row = API.table.rows;
          setData(
            row.map((data: any) => {
              return {
                no: data.c[0].v,
                nama: data.c[1].v,
                gambar: data.c[2].v,
                deskripsi: data.c[3].v,
                URL: data.c[4].v,
                kategori: data.c[5].v.toLowerCase(),
              };
            })
          );
        });
    },
    onError: () => {
      console.log("error get data");
    },
  });

  return (
    <Stack my={20}>
      <Flex alignItems={"center"} gap={5} mb={5}>
        <Heading fontWeight={"bold"} size={"lg"}>
          {params.portofolio === "project" ? "Personal Project" : "Certificate"}
        </Heading>
        <Box height={"0.3"} width={"20%"} bgColor={"gray.300"}></Box>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} w={"full"} spacing={5}>
        {params.portofolio === "certificate" ? (
          certificatePortofolio.map((props: CertificateProps) => {
            return (
              <Card
                as={motion.div}
                w={"full"}
                shadow={"lg"}
                key={props.name}
                overflow={"hidden"}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  className="aspect-video object-cover group-hover:object-contain transition duration-300 bg-white "
                  width={"full"}
                  src={props.name}
                  alt={props.name}
                  loading="lazy"
                />
                <CardBody>
                  <Heading size={"md"}>{props.title}</Heading>
                  <Text mb={5}>{props.body}</Text>
                </CardBody>
              </Card>
            );
          })
        ) : isLoading ? (
          <Spinner />
        ) : (
          data.map((props: PortofolioProps) => {
            return (
              <Card
                as={motion.div}
                w={"full"}
                shadow={"lg"}
                key={props.no}
                overflow={"hidden"}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Box w={"full"} position={"relative"} className="group">
                  <img
                    className="aspect-video object-cover cursor-pointer group-hover:object-contain transition duration-300 bg-white "
                    width={"full"}
                    src={props.gambar}
                    alt={props.nama}
                    loading="lazy"
                  />
                  <LinkOverlay href={props.URL} target="_blank">
                    <AbsoluteCenter
                      w={"full"}
                      h={"full"}
                      backdropBrightness={20}
                      cursor={"pointer"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      _hover={{
                        bgColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                      }}
                      bgColor={"transparent"}
                      color={"transparent"}
                    >
                      Live Demo
                    </AbsoluteCenter>
                  </LinkOverlay>
                </Box>
                <CardBody>
                  <VStack
                    alignItems={"start"}
                    justifyContent={"space-between"}
                    h={"full"}
                  >
                    <Heading size={"md"}>{props.nama}</Heading>
                    <Text mb={5}>{props.deskripsi}</Text>
                    <NextLink href={props.URL} target="_blank">
                      <Button colorScheme="blue">Live Demo</Button>
                    </NextLink>
                  </VStack>
                </CardBody>
              </Card>
            );
          })
        )}
      </SimpleGrid>
    </Stack>
  );
}
