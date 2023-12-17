import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../assets/BitCoin.png";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        CryptoSphere
      </Text>
      <Image
        w={"full"}
        h={"full"}
        objectFit={"contain"}
        src={image}
        //filter={"grayscale(1)"}
      />
    </Box>
  );
};

export default Home;
