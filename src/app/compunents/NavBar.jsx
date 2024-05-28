"use client"
import { Box, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu"


import { useState } from "react";




function BlackNavbar() {

   
  return (
   <>
   <header className=" bg-black text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-yellow-500">Home</Link>
      <Link href={"/auth/signup"} className="mr-5 hover:text-yellow-500 ">Sign Up</Link>
      <Link href={"/auth/login"} className="mr-5 hover:text-yellow-500"> Log In</Link>
      
    </nav>
  </div>
</header>
   </>
  );
}

export default BlackNavbar;