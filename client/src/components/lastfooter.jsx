import {
  Flex,
  Box,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  space,
  IconButton,
} from "@chakra-ui/react";
const LastFooter = () => {
  return(
      <>
      <Flex justifyContent={"center"} alignItems={"center"} backgroundColor={"#E7F0F5"} >
      <Box>
          <Heading padding={"20px"}>Let's get social</Heading>
      </Box>
       <Flex alignItems={"center"} >
        <Image
          width={"7%"}
         
          padding={"20px"}
          src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
        />
        <Image
          width={"7%"}
         
          padding={"20px"}
          src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
        />
        <Image
          width={"7%"}
        
          padding={"20px"}
          src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
        />
        <Image
          width={"7%"}
        
          padding={"20px"}
          src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
        />
        <Image
          width={"7%"}
        
          padding={"20px"}
          src="https://cdn-icons-png.flaticon.com/128/717/717426.png"
        />
      </Flex>
    </Flex>
    <Box textAlign={"center"} backgroundColor={"#E7F0F5"}>
    <Text style={{'color':'gray' , padding:'10px'}}>Privacy Policy . Terms & Conditions</Text>
    <Text style={{'color':'gray', padding:'10px'}}>© 2024 Imagine Marketing Limited. All Rights Reserved.</Text>
    <Text style={{'color':'gray', padding:'10px'}}>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing, <br />
       Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</Text>
       </Box>
      </>
  )
}
export default LastFooter
