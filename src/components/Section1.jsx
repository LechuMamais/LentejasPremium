import { Text, Button, VStack } from "@chakra-ui/react";

function Section1() {
  return (
    <VStack
      as="section"
      width={"100svw"}
      height={"100svh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      bgImage="url(/images/citric_bg.jpg)"
    >
      <Text fontSize={"120px"} m={0} color={"primary"}>
        EAT HEALTHY
      </Text>
      <Text
        w={"75%"}
        fontSize={"48px"}
        m={0}
        textAlign={"center"}
        color={"primary"}
      >
        Descubre el sabor y la calidad de las mejores legumbres
      </Text>
      <Button
        cursor={"pointer"}
        mt={36}
        border="none"
        borderRadius={8}
        bg="bgButton"
        px={16}
        color={"primary"}
      >
        <p>Nuestros Productos</p>
      </Button>
    </VStack>
  );
}

export default Section1;
