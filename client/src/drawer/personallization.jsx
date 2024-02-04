import React from "react";
import {
  Flex,
  Card,
  Button,
  Link,
  Text,
  Heading,
  Image,
  Stack,
  CardFooter,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StarIcon } from "@chakra-ui/icons";
import FilterPersonlization from "./filterpersonlization";

const PersonlizationSlide = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
    title: "Nirvana Ion",
    price: "₹2,229",
    rating: 4.5,
    description: "description",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
    title: "Airpods 131",
    price: "₹899",
    rating: 4.9,
    description: "description",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
    title: "Airpods 161",
    price: "₹999",
    rating: 4.8,
    description: "description",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_235_V2_ac99fe3f-ea0d-4a97-ae36-ee20e835dbe8.png?v=1688047719",
    title: "Rockerz 235 V2",
    price: "₹999",
    rating: 4.5,
    description: "description",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_91.jpg?v=1706776330",
    title: "Airdopes 91",
    rating: 4.5,
    price: "₹999",

    description: "Be first to review",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_201.jpg?v=1704780871",
    title: "Immortal 201",
    price: "₹1,299",
    rating: 4.5,
    description: "Be first to review",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_111.jpg?v=1706776330",
    title: "Immortal 111",
    price: "₹1,499",
    rating: 4.5,
    description: "Be first to review",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ION_ANC__1.jpg?v=1703228258",
    title: "Nirvana Ion ANC",
    price: "₹2,799",
    rating: 4.5,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
    title: "Airdopes 162",
    price: "₹999",
    rating: 4.9,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
    title: "Airdopes 131 PRO",
    price: "₹999",
    rating: 4.9,
    description: "description",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Flex_Connect.jpg?v=1689751649",
    title: "Wave Flex Connect",
    price: "₹1,499",
    rating: 4.8,
    description: "description",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765",
    title: "Airdopes 141",
    price: "₹1,999",
    rating: 4.8,
    description: "description",
  },
];
const PersonlizationStyle = () => {
  return (
    <>
      <hr />
      <Flex gap={2}>
        <Link padding={"10px"}>Home </Link>
        <Text padding={"10px"}> Special Range-Personlized Products</Text>
      </Flex>

      <Heading padding={"15px"}>Special Range-Personlized Products</Heading>

      <Button padding={"10px"} margin={"10px"} onClick={() => navigate("/")}>
        <FilterPersonlization />
      </Button>

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {PersonlizationSlide.map((item) => (
          <Card maxW="s" borderRadius={"10px"} margin={"10px"}>
            <Box display="flex" alignItems="center">
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
              <Box textAlign={"center"} alignItems={"center"} padding={"15px"}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>

                {[...Array(1)].map((_, index) => (
                  <StarIcon
                    key={index}
                    color={index < item.rating ? "yellow.400" : "gray.300"}
                  />
                ))}
                <Text>{item.rating}</Text>
                <Text>{item.description}</Text>
                <hr />
                <Stack>
                  <CardFooter>
                    <Button
                      backgroundColor="black"
                      color={"white"}
                      padding={"15px"}
                    >
                      <Text fontSize={"20px"}>Add to cart</Text>
                    </Button>
                  </CardFooter>
                </Stack>
              </Box>
            </Box>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default PersonlizationStyle;
