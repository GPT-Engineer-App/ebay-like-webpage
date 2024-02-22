import React from "react";
import { Box, Flex, Input, Button, InputGroup, InputLeftElement, Stack, Heading, Text, Image, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const productBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bg} minH="100vh" p={4}>
      {/* Header */}
      <Flex align="center" mb={4}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"} mr={10}>
          FakeBay
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input placeholder="Search for anything" />
        </InputGroup>
        <Button ml={2} leftIcon={<FaShoppingCart />} colorScheme="blue">
          Cart
        </Button>
      </Flex>

      {/* Main Content */}
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {Array.from({ length: 10 }, (_, index) => (
          <GridItem key={index} colSpan={[5, null, 1]}>
            <Box bg={productBg} boxShadow="sm" borderRadius="md" p={4} textAlign="center">
              <Image src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwJTI0JTdCaW5kZXglMjAlMkIlMjAxJTdEfGVufDB8fHx8MTcwODYzMTg2MHww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Product ${index + 1}`} borderRadius="md" mb={3} />
              <Text fontWeight="bold">Product {index + 1}</Text>
              <Text mb={3}>$ {Math.random().toFixed(2) * 100}</Text>
              <Button colorScheme="blue" size="sm">
                Add to Cart
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
