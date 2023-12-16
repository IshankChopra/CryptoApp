import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minHeight={"48"}
      px={"16"}
      py={("16", "8")}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack width={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best Crypto Trading App in India, We provide guidance at
            the reasonable Price
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]}></Avatar>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
