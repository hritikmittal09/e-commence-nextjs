import { Box, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu"

function BlackNavbar() {
  return (
    <Box bg="black" py={2}>
      <Flex alignItems="center" maxW="6xl" mx="auto">
        <Heading color="white" size="md">
          Amazon.in
        </Heading>
        <Spacer />
        <Spacer/>
        <Link href= ""></Link>
        <Button className=" bg-yellow-500 text-white"  variant= 'outline' >
          Sign In
        </Button>
        <Spacer/>
       <button className=" bg-black  rounded-full"> <LuShoppingCart  className="  text-4xl text-white cursor-pointer "/></button>
        
      </Flex>
    </Box>
  );
}

export default BlackNavbar;