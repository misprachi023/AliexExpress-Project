import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Menu,
  Box,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import Cart from "../drawer/cartstart";
import LauncheStyle from './../components/launches';

const CartSection = () => {
  // const [size, setSize] = React.useState('')

  // const handleClick = (newSize) => {
  //   setSize(newSize)
  //   onOpen()
  // }
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
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
      <Button
        style={{
          width: "100%",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Start Shopping
      </Button>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <Flex backgroundColor={"#f5f5f5"} margin={"auto"} gap={5} padding={"6px"}>
              <Text fontWeight={"bold"} lineHeight={"20px"}>
                Sign in to Redeem boAt reward <br />
                Points on this order
              </Text>

              <Button
                style={{
                  justify: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Sign In Now
              </Button>
            </Flex>
            <Box>
              <Text padding={"20px"} fontWeight={"bold"}>Unlock additional 15% OFF</Text>
             </Box>
          </DrawerBody>
            



          <DrawerFooter>
            <Flex margin={"auto"} gap={5}>
              <Menu>
                <MenuButton as={Button} >
                 <p>Inclusive of all taxes</p>
                </MenuButton>
                <MenuList padding={"10px"}>
                  <Text  fontWeight={"bold"} fontSize={"17px"}>Apply Coupon</Text>
              
                  <MenuItem>Cart Total:</MenuItem>
                  <MenuItem>Shipping:</MenuItem>
                  -----------------------------------------
                  <hr />
                  <MenuItem>To Pay:</MenuItem>
                </MenuList>
              </Menu>
              <Button
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Confirm Order
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartSection;
