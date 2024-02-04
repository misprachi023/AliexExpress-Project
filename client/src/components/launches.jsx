import React from "react";
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
import { Box, Text, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
const LauncheSlide = [
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
];
const LauncheStyle = () => {
  const slidesPerView = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  return (
    <>
      <Box padding="20px" fontSize="25px">
        {" "}
        New <span style={{ fontWeight: "bold" }}>Launches</span>
      </Box>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        freeMode={true}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {LauncheSlide.map((item) => (
          <SwiperSlide>
            <Box backgroundColor={"#f5f5f5"} borderRadius={"20px"}>
              <img
                src={item.image}

                style={{ width: "100%", height: "auto", padding: "5px" }}
                alt={item.title}
              />
              <Text marginLeft="10px">{item.title} </Text>
              <Text marginLeft="10px">{item.price}</Text>
              <Flex
                align="center"
                padding={2}
                gap="1"
                justifyContent={"space-between"}
              >
                <Flex>
                  {[...Array(1)].map((_, index) => (
                    <StarIcon
                      key={index}
                      color={index < item.rating ? "yellow.400" : "gray.300"}
                    />
                  ))}
                  <Text>{item.rating}</Text>
                </Flex>
                <Button
                  size={["xs", "md"]}
                  colorScheme="black"
                  background="black"
                >
                  Add to cart
                </Button>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default LauncheStyle;
