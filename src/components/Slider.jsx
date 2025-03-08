import { Flex, Text } from "@chakra-ui/react";

function Slider() {
  return (
    <Flex
      as="section"
      w={"100svw"}
      h={"100svh"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"url(images/campolentejas.jpg)"}
      backgroundSize="cover"
    >
      <Text
        fontSize={"310px"}
        color={"secondary"}
        opacity={0.85}
        fontWeight={"bold"}
      >
        LENTEJAS
      </Text>
    </Flex>
  );
}

export default Slider;
