import { useEffect, useState } from "react";
import { Container, Text, VStack, Spinner, Box } from "@chakra-ui/react";

const Index = () => {
  const [weatherDescription, setWeatherDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=auto:ip");
        const data = await response.json();
        const condition = data.current.condition.text.toLowerCase();

        let description = "";
        if (condition.includes("sunny")) {
          description = "It's sunny, wear a hat";
        } else if (condition.includes("rain")) {
          description = "It's raining, grab an umbrella";
        } else if (condition.includes("cloud")) {
          description = "It's cloudy, a perfect day for a walk";
        } else {
          description = "Weather is unpredictable, be prepared for anything!";
        }

        setWeatherDescription(description);
      } catch (error) {
        setWeatherDescription("Unable to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          <Box textAlign="center">
            <Text fontSize="2xl">{weatherDescription}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;