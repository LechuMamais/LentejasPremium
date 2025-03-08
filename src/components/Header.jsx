import { Box, Flex, Heading, Button, Stack } from "@chakra-ui/react";

function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <Box as="span" cursor="pointer" onClick={() => handleScroll("home")}>
            Inicio
          </Box>
          <Box
            as="span"
            cursor="pointer"
            onClick={() => handleScroll("products")}
          >
            Productos
          </Box>
          <Box as="span" cursor="pointer" onClick={() => handleScroll("about")}>
            Nosotros
          </Box>
          <Box
            as="span"
            cursor="pointer"
            onClick={() => handleScroll("opinions")}
          >
            Opiniones
          </Box>
        </Stack>

        <Button>Burger menu</Button>
      </Flex>
    </Box>
  );
}

export default Header;
