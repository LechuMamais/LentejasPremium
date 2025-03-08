import { Box, Flex, Heading, Button, Stack, Link } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      as="header"
      bgColor="bgHeader"
      py={8}
      px={32}
      w={"100%"}
      h="80px"
      position="fixed" // Fija el header en la parte superior
      top={0} // Lo coloca en la parte superior de la pantalla
      left={0} // Lo alinea a la izquierda
      right={0} // Lo alinea a la derecha
      zIndex={10} // Asegura que esté por encima de otros elementos
      backdropFilter={"blur(8px)"}
    >
      <Flex justify="space-between" align="center" h="100%">
        <Heading color="secondary">🫘</Heading>

        <Stack direction="row" gap={64}>
          <Link>Inicio</Link> {/*"18px"*/}
          <Link>Productos</Link>
          <Link>Nosotros</Link>
          <Link>Opiniones</Link>
        </Stack>

        <Button colorScheme="white" variant="outline">
          Burger menu
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
