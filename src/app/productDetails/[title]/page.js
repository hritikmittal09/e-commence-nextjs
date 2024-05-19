
import Image from "next/image";
import product from "@/app/api/models/prodcts";
import { Box, Flex, Text, Button, Select } from "@chakra-ui/react";

 const ProductDetails = async ({params}) => {
  const item = await product.findById(params.title)
  const {image,title,dis ,price}= item
 
  return (
    <Box as="section" bg="gray.100" color="gray.600" overflow="hidden" p={24}>
      <Box maxW="container.xl" mx="auto">
        <Flex>
          <img src= {image} className=" h-64" alt="" />
          <Box w={{ base: "full", lg: "1/2" }} pl={{ base: 0, lg: 10 }} py={{ base: 6, lg: 0 }} mt={{ base: 6, lg: 0 }}>
            <Text textTransform="uppercase" fontSize="sm" fontWeight="semibold" color="gray.500" mb={1}>Brand Name</Text>
            <Text fontSize="3xl" fontWeight="medium" color="gray.900" mb={1}>{title}</Text>
            <Flex mb={4}>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <svg key={index} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              ))}
              <Text ml={3} color="gray.600">4 Reviews</Text>
            </Flex>
            <Text mb={6} lineHeight="relaxed">{dis}</Text>
            <Flex alignItems="center" pb={5} borderBottomWidth={2} borderColor="gray.100" mb={5}>
              <Flex>
                <Text mr={3}>Color</Text>
                <Button borderWidth={2} borderColor="gray.300" rounded="full" w={6} h={6} focusBorderColor="indigo.500"></Button>
                <Button borderWidth={2} borderColor="gray.300" ml={1} bg="gray.700" rounded="full" w={6} h={6} focusBorderColor="indigo.500"></Button>
                <Button borderWidth={2} borderColor="gray.300" ml={1} bg="indigo.500" rounded="full" w={6} h={6} focusBorderColor="indigo.500"></Button>
              </Flex>
              <Flex ml={6} alignItems="center">
                <Text mr={3}>Size</Text>
                <Select variant="filled" border="none" bg="transparent" color="gray.600" pl={3} pr={10} focusBorderColor="indigo.500">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </Select>
                <Box pos="absolute" right={0} top={0} h="full" w={10} textAlign="center" lineHeight="none" color="gray.600">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </Box>
              </Flex>
            </Flex>
            <Flex>
              <Text fontSize="2xl" fontWeight="medium" color="gray.900" mr="auto">Rs. {price}</Text>
              <button className=" bg-red-700 text-white font-bold p-5 px-10  rounded-md">Buy</button>
              <Button rounded="full" w={10} h={10} bg="gray.200" p={0} borderWidth={0} ml={4}>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductDetails;
