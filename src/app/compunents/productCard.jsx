import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

function CardWithImage({ imageUrl, title, description }) {
  const url = `../productDetails/${title}`
  return (
    
    <Link href={url} >
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box h="250px" overflow="hidden">
        <Image src={imageUrl} alt={title} h="100%" w="100%" objectFit="cover" />
      </Box>

      <Box p="8">
        <Box d="flex" alignItems="baseline">
          <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
            New
          </Text>
        </Box>

        <Box mt="3" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {title}
        </Box>

        <Box>
          <Text color="gray.500" fontSize="sm">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
    </Link>
  );
}

export default CardWithImage;
