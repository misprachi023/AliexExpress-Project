import React from "react";
import Boat from "../data/boatdata"
import {
  Card,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  Box,
  Flex,
  CardFooter,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  Divider,
} from "@chakra-ui/react";
import LifeStyle from "../components/lifestyle";
import Footer from "../components/footer";
import MidFooter from "../components/midfooter";
import LastFooter from "../components/lastfooter";

export default function Corporate() {
  return (
    <>

    {/* first part */}
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        padding={"35px"}
        //   height={"550"}
        backgroundColor={"#F5F5F5"}
      >
        <Image
          objectFit="cover"
          width={"50%"}
          //    padding={"35px"}
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1707478687_1ea3b8f7-d922-416a-a82f-085c1dbfb91a.png?v=1704354916"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading>Your Bulk Orders Are Now Hassle Free</Heading>
            <Heading>Got A Big boAt Order?</Heading>

            <Text>Come sail with us</Text>
            <Text>
              For shipments of 25 units or more, <br />
              <span style={{ fontWeight: "bold" }}>Hit us up!</span>
            </Text>
          </CardBody>
          <CardFooter>
            {" "}
            <Button
              backgroundColor={"black"}
              color={"white"}
              width={"100%"}
              borederRadius={"15px"}
              margin={"20px"}
            >
              Submit Your Requirements
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      {/* second part */}

      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        {Boat.map((item) => (
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
              <Box  textAlign={"center"}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
                
                <Stack>
                  <CardFooter>
                    <Button backgroundColor="black" color={"white"} padding={"20px"} >
                      <Text fontSize={"14px"}>{item.button}</Text>
                    </Button>
                   
                  </CardFooter>
                </Stack>
                <Text>{item.description}</Text>
            
              </Box>
           
          </Card>
        ))}
      </Grid>


      <LifeStyle/>


      <Footer/>
      <MidFooter/>
      <LastFooter/>
    </>
  );
}


