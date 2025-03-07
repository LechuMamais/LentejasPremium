import { Box, Flex, Heading, Button } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      as="header"
      bg="bgCustomGreen"
      py={8}
      px={32}
      width={"100%"}
      boxShadow="md"
      height="72px"
    >
      <Flex justify="space-between" align="center" h="100%">
        <Heading color="secondary" bg="bgCustom">
          EcoGlow
        </Heading>
        <Box color="secondary">Inicio</Box>
        <Button colorScheme="white" variant="outline">
          Suscribirse
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
