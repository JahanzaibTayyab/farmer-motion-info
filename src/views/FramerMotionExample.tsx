/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { Container, Text, Heading } from "@chakra-ui/react";
import { MotionBox } from "@/components";
import { fadeIn } from "@/utils/framerMotion";
export default function FramerMotionExample() {
  return (
    <Container
      h="100vh"
      display="flex"
      py={20}
      flexDirection={"column"}
      gap={5}
    >
      <MotionBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
      >
        I'm Dizzy Button!
      </MotionBox>
      <MotionBox
        padding={"15px 25px 20px"}
        bg="white"
        height={20}
        boxShadow="0 30px 60px 0 rgb(1 11 60 / 14%)"
        borderRadius={4}
        display={{ base: "none", md: "block" }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            repeatType: "loop",
          },
        }}
        animate={{
          y: ["2rem", "4rem", "6rem"],
        }}
      >
        <Text fontSize={"sm"} color="#474956">
          Tomorrow is our
        </Text>
        <Heading size="sm">“When I Grow Up” Spirit Day!</Heading>
      </MotionBox>
      <MotionBox
        variants={{
          hidden: {},
          show: {},
        }}
        initial="hidden"
        whileInView="show"
        mt={40}
        viewport={{ once: false, amount: 0.25 }}
      >
        <MotionBox
          variants={fadeIn("right", "tween", 0.2, 1)}
          borderRadius={"40px 4px 40px 4px"}
          objectFit={"cover"}
          overflow="hidden"
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1675880935747-5755d109482a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            }
            alt="get-started"
            width={500}
            height={500}
          />
        </MotionBox>
      </MotionBox>
    </Container>
  );
}
