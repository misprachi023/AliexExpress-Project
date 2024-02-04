import React from "react";
import Passion from "../data/passion";
import {
  Box,
  Button,
  Link,
  HStack,
  Card,
  Grid,
  Flex,
  Text,
  Heading,
  Image,
  Stack,
  CardFooter,
  GridItem,
} from "@chakra-ui/react";
import LauncheStyle from "../components/launches";
import CardStyle from "../components/card";
import BoatStyle from "../components/boat";
import { StarIcon } from "@chakra-ui/icons";
import Footer from "../components/footer";
import MidFooter from "../components/midfooter";
import LastFooter from "../components/lastfooter";

const Gift = () => {
  return (
    <>
      <Box>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/compress_1_197kb_2000x.jpg?v=1694498286"
          alt=""
        />
      </Box>
      {/* // first part */}

      <Box padding="10px" fontSize="25px">
        {" "}
        For <span style={{ fontWeight: "bold" }}>Special</span> Days
      </Box>
      <HStack
        as={"nav"}
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize={"20px"}
        color={"gray"}
      >
        <Button fontWeight="bold" borderRadius={"10px"}>
          {" "}
          New Year{" "}
        </Button>
        <Link>Birthtday</Link>
        <Link>Anniversry</Link>
        <Link>Wedding</Link>
      </HStack>

      {/* second part */}

      <LauncheStyle />

      {/* third part */}

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {/* I want to addd two card as a image */}
        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/gift2_1600x.jpg?v=1692769727"
            borderRadius={"10px"}
            alt=""
          />
        </Card>
        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/gift3_1600x.jpg?v=1692769727"
            borderRadius={"10px"}
            alt=""
          />
        </Card>
      </Grid>

      {/* fourth part */}
      <Box padding="10px" fontSize="25px">
        {" "}
        For Friends & <span style={{ fontWeight: "bold" }}>Family</span>
      </Box>
      <HStack
        as={"nav"}
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize={"20px"}
        color={"gray"}
      >
        <Button fontWeight="bold" borderRadius={"10px"}>
          {" "}
          Parents{" "}
        </Button>
        <Link>Sblings</Link>
        <Link>Friends</Link>
        <Link>beloved</Link>
        <Link>Colleagues</Link>
      </HStack>

      {/* fifth part */}
      <CardStyle />

      {/* sixth part */}

      <Box>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/gifting-1_1_2000x.jpg?v=1692769923"
          alt=""
        />
      </Box>

      {/* seventh part */}

      <Grid templateColumns="repeat(4, 1fr)" >
      <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123"
            width={"35%"}
            height={"35%"}
            alt=""
          />
          <Text>Made By<span style={{fontWeight:"bold"}}> Indians</span></Text>
        </Card>
        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123"
            width={"35%"}
            height={"35%"}
            alt=""
          />
          <Text>Eciting<span style={{fontWeight:"bold"}} >Offers</span></Text>
        </Card>

        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123"
            width={"35%"}
            height={"35%"}
            alt=""
          />
          <Text>Fast<span style={{fontWeight:"bold"}}> Dilevery</span></Text>
        </Card>

        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123"
            width={"35%"}
            height={"35%"}
            alt=""
          />
          <Text>Exclusive<span style={{fontWeight:"bold"}}> Benefits</span></Text>
        </Card>
        
      </Grid>

      {/* eighth part */}

      <Box padding="10px" fontSize="25px">
        {" "}
        By & <span style={{ fontWeight: "bold" }}>Passion</span>
      </Box>
      <HStack
        as={"nav"}
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize={"20px"}
        color={"gray"}
      >
        <Button fontWeight="bold" borderRadius={"10px"}>
          {" "}
          Audiophiles{" "}
        </Button>
        <Link>Gamers</Link>
        <Link>Workaholics</Link>
        <Link>Artists</Link>
        <Link>Fitness Fanatic</Link>
      </HStack>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {Passion.map((item) => (
          <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
            
              <Image
                src={item.image}
                style={{
                  width: "100%",
                  height: "250px",
                  padding: "5px",
                  border: "10px 10px  0px 0px",
                  borderRadius: "15px",
                }}
                alt={item.title}
              />
              <Box  alignItems={"center"} >
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>

                <Flex align="center" display="inline-flex " gap="1" marginLeft="10px">
                {[...Array(1)].map((_, index) => (
                  <StarIcon key={index} color={index < item.rating ? "yellow.400" : "gray.300"} />
                ))}
                <Text>{item.rating}</Text>
                
                <Stack>
                  <CardFooter>
                    <Button backgroundColor="black" color={"white"} >
                      <Text fontSize={"20px"}>Add to cart</Text>
                    </Button>
                  </CardFooter>
                </Stack>
              </Flex>
              </Box>
           
          </Card>
        ))}
      </Grid>

      {/* ninth part */}

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {/* I want to addd two card as a image */}
        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/gift-4_1600x.jpg?v=1692770282"
            borderRadius={"10px"}
            alt=""
          />
        </Card>
        <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/gift-5_1600x.jpg?v=1692770283"
            borderRadius={"10px"}
            alt=""
          />
        </Card>
      </Grid>

      <Footer/>
      <MidFooter/>
      <LastFooter/>

    </>
  );
};
export default Gift;
