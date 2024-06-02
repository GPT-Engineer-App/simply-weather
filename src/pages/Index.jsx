import { useState } from "react";
import { Container, Text, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  const [weatherDescription] = useState("It's sunny, wear a hat");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box textAlign="center">
          <Text fontSize="2xl">{weatherDescription}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;