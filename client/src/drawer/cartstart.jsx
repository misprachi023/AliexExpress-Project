import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Radio,
  Text, 
  Flex,
  Heading,
  Input,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { BsHandbag } from "react-icons/bs";
import CartSection from "../drawer/cartsection";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        {/* <Stack direction='row' mb='4'>
          <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio>
        </Stack> */}
      </RadioGroup>
      <Button onClick={onOpen}>
        <BsHandbag />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px"> <Heading> Your Cart</Heading></DrawerHeader>
          <DrawerBody>
          <Flex direction="column" justify="space-between" h="60%">
         

         <img src="https://5.imimg.com/data5/TF/CT/SU/SELLER-6509583/online-shopping-bag-500x500.jpg"
         justify="center"
         height={"200px"}
         width={"200px"}
         align="center"
          alt="" />
         <Text direction="column" fontWeight={"bold"} textAlign={"center"} padding={"20px"} >Your Cart is feeling lonely</Text>
          <CartSection/>
          {/* <Button
           style={{
            fontWeight: "bold",
            fontSize: "20px",
            backgroundColor: "black",
            color: "white",
          }}>
              Start Shopping
           
          </Button> */}
        </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
