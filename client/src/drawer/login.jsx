import React from "react";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";

import { FaRegUser } from "react-icons/fa";
import Createuser from "./createuser";
const Login = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/user_6be0d230-5262-4e4c-94b2-e796ba39b697.png?v=1663761259"
              alt=""
            />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader style={{ fontWeight: "bold" }}> 
              Hi boAthead!
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Createuser/>
              
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
};

export default Login;
