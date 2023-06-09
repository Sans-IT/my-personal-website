"use client";

import Navbar from "@/components/Navbar/Navbar";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      delay: 0,
      mirror: false,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Navbar />
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  );
}
