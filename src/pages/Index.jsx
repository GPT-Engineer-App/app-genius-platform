import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Image, Grid, GridItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaCode, FaQuestionCircle, FaRocket } from "react-icons/fa";

const tutorials = [
  {
    id: 1,
    title: "Web Development Basics",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript.",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHR1dG9yaWFsfGVufDB8fHx8MTcxMTE1Njc5MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Build your first mobile app using React Native.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHR1dG9yaWFsfGVufDB8fHx8MTcxMTE1Njc5MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more tutorials...
];

const Index = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const startTutorial = (tutorial) => {
    setSelectedTutorial(tutorial);
    onOpen();
  };

  return (
    <Box>
      <Box bg="gray.100" py={12}>
        <VStack spacing={6}>
          <Heading as="h1" size="2xl">
            App Creation Platform
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Learn to build your own applications with our comprehensive tutorials and interactive sessions.
          </Text>
          <Button leftIcon={<FaCode />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>

      <Box py={12}>
        <Heading as="h2" size="xl" mb={6}>
          Featured Tutorials
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {tutorials.map((tutorial) => (
            <GridItem key={tutorial.id}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden" cursor="pointer" onClick={() => startTutorial(tutorial)}>
                <Image src={tutorial.image} alt={tutorial.title} />
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2}>
                    {tutorial.title}
                  </Heading>
                  <Text>{tutorial.description}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box bg="gray.100" py={12}>
        <VStack spacing={6}>
          <Heading as="h2" size="xl">
            Create Your Own Projects
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Apply your learning by designing and developing your own applications.
          </Text>
          <HStack>
            <Button leftIcon={<FaQuestionCircle />} colorScheme="green">
              Get Support
            </Button>
            <Button leftIcon={<FaRocket />} colorScheme="purple">
              Release Your App
            </Button>
          </HStack>
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedTutorial?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Render the selected tutorial content */}
            <Text>Tutorial content goes here...</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
