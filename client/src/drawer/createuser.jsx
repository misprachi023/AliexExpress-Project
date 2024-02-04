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
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Optverification from "./otpverification";
const Createuser = () => {

    const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    const input = e.target.value;

    // Basic email format validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

    if (input.endsWith('') || isValidEmail) {
        setEmail(input);
      }
  };
  const handleSendOtp = () => {
    // Here, you can add your logic to send OTP
    // For simplicity, let's just log the email for now
    console.log(`OTP sent to ${email}`);
    
    // Update state to indicate OTP has been sent
    setOtpSent(true);
  };
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
        Login
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent padding={"45px"} borderRadius={"15px"}>
          <ModalHeader textAlign={"center"} fontSize={"30px"}>
            Get <span style={{ fontWeight: "bold" }}>started</span>{" "}
          </ModalHeader>
          <Text textAlign={"center"}>Please enter your Email ID to continue</Text>
          <ModalCloseButton />
          <ModalBody>
            <Text padding={"10px"}>Enter email id</Text>
            <Input
              type="email"
              id="email"
              placeholder="Type Here"
              value={email}
              onChange={handleEmailChange}
            />
          </ModalBody>
          <ModalFooter justifyContent={"space-evenly"}>
            <Optverification />
          </ModalFooter>
          <Text textAlign={"center"}>
            By Confirming, you agree to boAt's Terms and <br />
            Conditions and privacy Policy.
          </Text>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Createuser;
