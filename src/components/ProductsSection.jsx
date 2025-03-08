import { Box, Text } from "@chakra-ui/react";

function ProductsSection() {
  return (
    <Box width={"100svw"} height={"100svh"} bg={"bgCustomGreen"}>
      <Text m={0} color={"primary"}>
        Productos
      </Text>
      <Box></Box>
      <Box></Box>
    </Box>
  );
}

export default ProductsSection;
