"use client";

import CardPortofolio from "@/components/Card/CardPortofolio";
import Footer from "@/components/Footer/Footer";
import { Text, Container, Heading, VStack } from "@chakra-ui/react";

type Props = {};

function PortofolioPage({}: Props) {
  return (
    <Container maxW={"container.xl"} my={10}>
      <VStack my={20}>
        <Heading data-aos="fade-up" data-aos-delay="100">
          My Portofolio
        </Heading>
        <Text color={"gray.400"} data-aos="fade-left" data-aos-delay="200">
          Explore my portofolio project and my achivement that i`&apos;`ve been
          done/accomplished
        </Text>
      </VStack>

      {/* Portofolio */}
      <CardPortofolio params={{ portofolio: "certificate" }} />

      {/* Certificate */}
      <CardPortofolio params={{ portofolio: "project" }} />

      <Footer />
    </Container>
  );
}

export default PortofolioPage;
