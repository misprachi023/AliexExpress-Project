// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image,
//   Stack,
//   Heading,
//   Text,
//   Link,
//   Button,
//   Flex,
//   Box,
// } from "@chakra-ui/react";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaApple } from "react-icons/fa";
// import { TfiFacebook } from "react-icons/tfi";
// const Demo = () => {
//   return (
//     <>
//       <Card
//    direction={{ base: "column", sm: "row" }}
//    overflow="hidden"
//    variant="outline"
//    padding={"35px"}
//    //   height={"550"}
//    backgroundColor={"#F5F5F5"}
// >
//   <Image
//     objectFit='cover'
//     maxW={{ base: '100%', sm: '200px' }}
//     src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
//     alt='Caffe Latte'
//   />

//   <Stack>
//     <CardBody>
//      <Heading>Sign in to Your account</Heading>
//      <Text>Don't have an account? <Link>Sign in</Link></Text>

//      <Box>
//       <Flex>
//         <img src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300"
//         style={{width:"20px",height:"20px"}} alt="" />
//         <Link>Continue with Google</Link>
//       </Flex>
//       <Flex>
//       <HiOutlineMail />
//         <Link>Continue with email/username</Link>
//       </Flex>
//       <Box>
//         <Button><FaApple />
//         <Text>Apple</Text>
//         </Button>
//         <Button><TfiFacebook />
//         <Text>Facebook</Text>
//         </Button>
//       </Box>
//      </Box>
//     </CardBody>

//     {/* <CardFooter>
//       <Button variant='solid' colorScheme='blue'>
//         Buy Latte
//       </Button>
//     </CardFooter> */}
//   </Stack>
// </Card>
//     </>
//   );
// }

// export default Demo
import React from "react";
import Boat from "../data/boatdata";
import {
  Card,
  CardHeader,
  CardBody,
  Grid,
  GridItem,
  Box,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Stack,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { FaApple } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";


export default function Demo() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      {/* first part */}
      <Flex margin={"auto"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          padding={"100px"}
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

          <Stack backgroundColor={"red"} width={"50%"}> 
            <CardBody textAlign={"center"} justify={"center"} align={"center"}> 
              <Heading>Sign in to Your account</Heading>
              <Text padding={"10px"}>
                Don't have an account? <Link>Sign in</Link>
              </Text>

              <Box>
                <Flex>
                  <img
                    src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300"
                    style={{ width: "20px", height: "20px" }}
                    alt="" 
                  />
                  <Link margin={"auto"} textAlign={"center"}>
                    Continue with Google
                  </Link>
                </Flex>
                <Flex>
                  <HiOutlineMail />
                  <Link textAlign={"center"}>Continue with email/username</Link>
                </Flex>
                <Box textAlign={"center"}>
                  <Button padding={"10px"}>
                    <FaApple />
                    <Text>Apple</Text>
                  </Button>
                  <Button>
                    <TfiFacebook />
                    <Text>Facebook</Text>{" "}
                  </Button>
                </Box>
              </Box>
              {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent padding={"30px"} borderRadius={"15px"} width={"150%"}>
          <ModalHeader textAlign={"center"} fontSize={"30px"} fontWeight={"bold"} >
            Continue with Email ID
          </ModalHeader>
          <Text textAlign={"center"}> Please enter your Name & email ID to continue</Text>
          <ModalCloseButton />
          <ModalBody>
          <FormControl width={"100%"}>
              <FormLabel>Full name</FormLabel>
              <Input placeholder='Type Here'  width={"100%"}/>
            </FormControl>

            <FormControl mt={4}> 
              <FormLabel>E-mail</FormLabel>
              <Input placeholder='Type Here' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy
          </Text>
        </ModalContent>
      </Modal> */}
            </CardBody>
          </Stack>
        </Card>
      </Flex>
    </>
  );
}
