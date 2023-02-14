"use client";
import type { ReactNode } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

const chakraWrapper = ({ children }: Props) => {
  return (
    <>
      <ChakraProvider>{children}</ChakraProvider>
    </>
  );
};
export default chakraWrapper;
