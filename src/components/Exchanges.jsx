import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${server}/exchanges`).then((response) => {
      console.log(response.data);
      setExchanges(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack>
            {exchanges.map((i) => {
              return <div>{i.name}</div>;
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
