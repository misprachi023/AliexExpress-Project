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
    const CardSlide = [
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
    ];
    const CardStyle = () => {
        const slidesPerView = useBreakpointValue({ base: 2, md: 3, lg: 4 });
        return (
            <>
                <Box padding="20px" fontSize="25px">
                    {" "}
                    Today <span style={{ fontWeight: "bold" }}>Offers</span>
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
                    {CardSlide.map((item) => (
                        <SwiperSlide>
                            <Box size={["xs","sm","sm","sm"]} backgroundColor={"#f5f5f5"} >
                                <img
                                    src={item.image}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        padding: "5px",
                                        border: "10px 10px  0px 0px",
                                    }}
                                    alt={item.title}
                                />
                                <Text marginLeft="10px">{item.title} </Text>
                                <Text marginLeft="10px">{item.price}</Text>
                                <Flex
                                    align="center"
                                    justifyContent="space-between"
                                    marginLeft="10px"
                                    padding={2}
                                   
                                >
                                    <Flex>
                                    {[...Array(1)].map((_, index) => (
                                        <StarIcon
                                            key={index}
                                            color={index < item.rating ? "yellow.400" : "gray.300"}
                                        />
                                    ))}
                                    <Text>{item.rating}</Text></Flex>
                                    <Button
                                        size={["xs","md",]}
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
    export default CardStyle;
