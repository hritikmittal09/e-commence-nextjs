"use client"
import { Box, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu"
import SinupModal from "./SingnUp-modal";
import { useState } from "react";




function BlackNavbar() {
  const [openModal,setOpenmodal] = useState(false)
  return (
    <Box bg="black" py={2}>
      <Flex alignItems="center" maxW="6xl" mx="auto">
        <Heading color="white" size="md">
          Amazon.in
        </Heading>
        <Spacer />
        <Spacer/>
        <Link href= ""></Link>
        <Button className=" bg-yellow-500 text-white"  variant= 'outline' onClick={()=>{setOpenmodal(true)}} >
          Sign In
      </Button>
      {openModal && <SinupModal onclose = {()=>{setOpenmodal(false)}}/>}
        <Spacer/>
       <button className=" bg-black  rounded-full"> <LuShoppingCart  className="  text-4xl text-white cursor-pointer "/></button>
        
      </Flex>
    </Box>
    
  );
}

export default BlackNavbar;