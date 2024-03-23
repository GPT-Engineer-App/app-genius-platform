import React, { useState } from "react";
import { Box, Heading, Text, VStack, Textarea, Button } from "@chakra-ui/react";

const CreateApp = () => {
  const [appRequirements, setAppRequirements] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/generate-app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requirements: appRequirements }),
      });

      if (response.ok) {
        window.location.href = "/app-result";
      } else {
        console.error("Failed to generate app");
      }
    } catch (error) {
      console.error("Error generating app:", error);
    }
  };

  return (
    <Box py={12}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Create Your Own App
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Describe your app requirements and let our GPT Engineer create it for you.
        </Text>
        <Textarea value={appRequirements} onChange={(e) => setAppRequirements(e.target.value)} placeholder="Enter your app requirements here..." size="lg" height="200px" />
        <Button colorScheme="blue" size="lg" onClick={handleSubmit}>
          Create App
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateApp;
