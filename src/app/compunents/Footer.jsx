import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className="bg-black text-white  bottom-0  w-full h-100">
      <Box mx="auto" maxW="xl" p={4} py={6} lg="8" bottom={0} left={0} >
        <Flex justifyContent="space-between" alignItems="center">
          <div>
          </div>
          <Flex gridGap={8} justifyContent="space-between">
            <div>
              <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">Resources</Text>
              <ul>
                <li><Link href="https://flowbite.com/" textDecoration="underline">Flowbite</Link></li>
                <li><Link href="https://tailwindcss.com/" textDecoration="underline">Tailwind CSS</Link></li>
              </ul>
            </div>
            <div>
              <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">Follow us</Text>
              <ul>
                <li><Link href="https://github.com/themesberg/flowbite" textDecoration="underline">Github</Link></li>
                <li><Link href="https://discord.gg/4eeurUVvTy" textDecoration="underline">Discord</Link></li>
              </ul>
            </div>
            <div>
              <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">Legal</Text>
              <ul>
                <li><Link href="#" textDecoration="underline">Privacy Policy</Link></li>
                <li><Link href="#" textDecoration="underline">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </Flex>
        </Flex>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <Flex justifyContent="space-between" alignItems="center" flexDirection={{ base: "column", sm: "row" }}>
          <Text fontSize="sm" color="gray.500" textAlign={{ base: "center", sm: "left" }}>
            © 2023 <Link href="https://flowbite.com/" textDecoration="underline">Flowbite™</Link>. All Rights Reserved.
          </Text>
          <Flex mt={{ base: 4, sm: 0 }} gridGap={5}>
            <Link href="#" color="gray.500" _hover={{ color: "gray.900" }}>Facebook</Link>
            <Link href="#" color="gray.500" _hover={{ color: "gray.900" }}>Twitter</Link>
            <Link href="#" color="gray.500" _hover={{ color: "gray.900" }}>GitHub</Link>
            <Link href="#" color="gray.500" _hover={{ color: "gray.900" }}>Dribbble</Link>
          </Flex>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
