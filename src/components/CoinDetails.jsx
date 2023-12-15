import {
  Container,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Loader from "./Loader";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "..";
import ErrorComponent from "./ErrorComponent";

const CoinDetails = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [currency, setCurrency] = useState("inr");

  const currencysymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const params = useParams();

  useEffect(
    () => {
      const fetchCoin = async () => {
        try {
          const { data } = await axios.get(`${server}/coins/${params.id}`);
          console.log(data);
          setCoin(data);
          setLoading(false);
          //console.log(data);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };
      fetchCoin();
    },
    [params.id],
    currency
  );

  if (error) return <ErrorComponent message={"Error while Fetching Coin"} />;

  return (
    <div>
      <Container maxWidth={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box borderWidth={1} width={"full"}>
              Ishank Chopra
            </Box>

            {/* Button */}

            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack spacing={"4"}>
                <Radio value={"inr"}>INR</Radio>

                <Radio value={"usd"}> USD</Radio>

                <Radio value={"eur"}> EURO</Radio>
              </HStack>
            </RadioGroup>

            <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
              <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
                Last Updated On{" "}
                {Date(coin.market_data.last_updated).split("G")[0]}
              </Text>

              <Image
                src={coin.image.large}
                w={"16"}
                h={"16"}
                objectFit={"contain"}
              ></Image>

              <Stat>
                <StatLabel>{coin.name}</StatLabel>
                <StatNumber>
                  {currencysymbol}
                  {coin.market_data.current_price[currency]}
                </StatNumber>

                <StatHelpText>
                  <StatArrow
                    type={
                      coin.market_data.price_change_percentage_24h > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {coin.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>
            </VStack>
          </>
        )}
      </Container>
    </div>
  );
};

export default CoinDetails;
