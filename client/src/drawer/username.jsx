import React from "react";
import {
  Button,
  Modal,
  Text,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import LoginSuccess from "./loginsuccess";
const UserName = () => {
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
        Continue
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
            <LoginSuccess/>
          </ModalFooter>
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy
          </Text>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserName;
