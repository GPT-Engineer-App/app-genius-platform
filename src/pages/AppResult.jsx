import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const AppResult = () => {
  const [appHtml, setAppHtml] = useState("");

  useEffect(() => {
    const fetchAppHtml = async () => {
      try {
        const response = await fetch("/api/get-app-html");
        if (response.ok) {
          const html = await response.text();
          setAppHtml(html);
        } else {
          console.error("Failed to fetch app HTML");
        }
      } catch (error) {
        console.error("Error fetching app HTML:", error);
      }
    };

    fetchAppHtml();
  }, []);

  return (
    <Box py={12}>
      <Heading as="h1" size="2xl" mb={6}>
        Your Generated App
      </Heading>
      <Box dangerouslySetInnerHTML={{ __html: appHtml }} />
    </Box>
  );
};

export default AppResult;
