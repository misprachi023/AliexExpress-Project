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
  List,
  Box,
  Flex,
  ListItem,
  Checkbox,
  ListIcon,
  OrderedList,
  UnorderedList,
  Input,
} from "@chakra-ui/react";
// import { BsHandbag } from "react-icons/bs";
// import CartSection from "../drawer/cartsection";

const FilterPersonlization = () => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
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
  const btnRef = React.useRef();
  return (
    <>
      <Button
        style={{
          width: "100%",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "10px",
          //   backgroundColor: "black",
          color: "black",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Filter By
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"sm"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"bold"} fontSize={"25px"}>
            Filter By
          </DrawerHeader>

          <DrawerBody>
            <Flex padding={"10px"} margin={"auto"} gap={5}>
              <UnorderedList listStyleType={"none"} lineHeight={"40px"}>
                <ListItem fontSize={"17px"}>Color</ListItem>
                <ListItem fontSize={"17px"}>Price</ListItem>
                <ListItem fontSize={"17px"}>Best for</ListItem>
                <ListItem fontSize={"17px"}>Noise Cancellation</ListItem>
                <ListItem fontSize={"17px"}>Playback</ListItem>
                <ListItem fontSize={"17px"}>Features</ListItem> 
                <ListItem fontSize={"17px"}>Avalibility</ListItem>
              </UnorderedList>

              <UnorderedList listStyleType={"none"} lineHeight={"40px"}>
                <ListItem>
                  <Checkbox isInvalid fontSize={"17px"}>
                    Black ( 6 )
                  </Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox isInvalid fontSize={"17px"}>
                    Blue ( 3 )
                  </Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox isInvalid fontSize={"17px"}>
                    Green ( 2 )
                  </Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox isInvalid fontSize={"17px"}>
                    Pink ( 1 )
                  </Checkbox>
                </ListItem>
                <ListItem>
                  <Checkbox isInvalid fontSize={"17px"}>
                    White ( 5 )
                  </Checkbox>
                </ListItem>
              </UnorderedList>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              width={"50%"}
              fontSize="20px"
              backgroundColor="#E5E5E5"
              // fontWeight= "bold"
              borderRadius="10px"
              padding="10px"
              onClick={onClose}
            >
              Clear All
            </Button>
            <Button
              style={{
                width: "50%",
                fontSize: "20px",
                // fontWeight: "bold",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Apply Filter
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterPersonlization;
