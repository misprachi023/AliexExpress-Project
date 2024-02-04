import React from "react";
import { FaRegUser } from "react-icons/fa";
import {
  Box,
  Flex,
  Link,
  HStack,
  IconButton,
  Button,
  Grid,
  Text,
  GridItem,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue, 
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon , ChevronDownIcon} from "@chakra-ui/icons";
import categories from "../data/categories";;
import Login from "../drawer/login";
import Cart from "../drawer/cartstart";
/**
* @author Prachi Mishra
* @function Navbar
**/
const Navbar = (props) => {
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    sm: false,
    lg: true, 
    xl: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box textAlign={"center"} backgroundColor="gray.100" padding="10px">
        <span style={{ fontWeight: "500" }}>Ranveer Singh</span> is Lost in
        Nirvana. Check it out! 👀
      </Box>
      <Box bg={useColorModeValue("white", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-evenly"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={5} alignItems={"center"}>
            <Box>
              <img
                src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
                width="100px"
                alt=""
              />
            </Box>
            <Menu>
              {isDesktop && <MenuButton rightIcon={<ChevronDownIcon />}>Categories</MenuButton>}
            {isDesktop &&<MenuList zIndex={5}>
           
                <Grid  templateColumns="repeat(5, 1fr)">
                {categories.map((item) => (
                    <GridItem display={"flex"}>
                    <img width={"20%"} src={item.image} />
                    <Text fontSize={"10px"}>{item.title}</Text> 
                    </GridItem>
                ))}
                </Grid>
       
            </MenuList>}
            </Menu>
           
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link>boAt Personalisation </Link>
              <Link>Gift with boAt</Link>
              <Link>Corporate Order</Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={'2'}>
            <SearchBar />
            <Button  onClick={() => navigate("/")}><Login/></Button>
            <Button onClick={() => navigate("/")}><Cart/></Button>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Grid width={"100%"} templateColumns="repeat(5, 1fr)">
              {categories.map((item) => (
                <GridItem display={"flex"}>
                  <img width={"20%"} src={item.image} />
                  <Text fontSize={"10px"}>{item.title}</Text>
                </GridItem>
              ))}
            </Grid>
          </Box>
        ) : null}
      </Box>
      <Box p={4}></Box>
      <Box bg={useColorModeValue("white", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Menu>
                <MenuButton as={Button} zIndex>
                  More
                </MenuButton>
                <MenuList>
                  <MenuItem>Daily Deals</MenuItem>
                  <MenuItem>Do What FloAts Your boAt</MenuItem>
                  <MenuItem>Blogs</MenuItem>
                  <MenuItem>Earn 100</MenuItem>
                  <MenuItem>Careers</MenuItem>
                  <MenuItem>Social Responsibility</MenuItem>
                  <MenuItem>Store Locator</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
function SearchBar() {
  return (
    <Flex position={"relative"} width={"100%"} padding={5}>
      <Input
        borderRadius={"15"}
        width={"100%"}
        bg="white"
        variant="flushed"
        paddingLeft="50px"
        placeholder="Search"
      />
      <IconButton
        zIndex={2}
        position={"absolute"}
        top={6}
        left={6}
        backgroundColor={"white"}
        size={"sm"}
        color="black"
        aria-label="Search database"
        icon={<SearchIcon />}
      />
    </Flex>
  );
}
export default Navbar;