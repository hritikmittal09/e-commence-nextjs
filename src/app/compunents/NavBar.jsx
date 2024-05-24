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
      <Link href={""} className="mr-5 hover:text-yellow-500">Fourth Link</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
   </>
  );
}

export default BlackNavbar;