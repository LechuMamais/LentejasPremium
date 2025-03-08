import { Box, Flex, Heading, Button, Stack, Link } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      as="header"
      bgColor="bgHeader"
      py={8}
      px={32}
      w={"100%"}
      h="60px"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10}
      backdropFilter={"blur(8px)"}
    >
      <Flex justify="space-between" align="center" h="100%">
        <Heading color="secondary">🫘</Heading>

        <Stack direction="row" gap={64}>
          <Link fontSize={"18px"}>Inicio</Link>
          <Link>Productos</Link>
          <Link>Nosotros</Link>
          <Link>Opiniones</Link>
        </Stack>

        <Button>Burger menu</Button>
      </Flex>
    </Box>
  );
}

export default Header;
