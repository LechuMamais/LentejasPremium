import { Text, Stack } from "@chakra-ui/react";

function Opinions() {
  return (
    <Stack
      id="opinions"
      as="section"
      bg={"url(/images/Opinions_background.png)"}
      h={"1900px"}
      p={"100px"}
    >
      <Text
        fontSize={"36px"}
        fontWeight={"600"}
        color={"primary"}
        textAlign={"start"}
      >
        Expertos nos recomiendan
      </Text>

      <Text fontSize={"48px"} color={"primary"}>
        ¡Buscanos en tu supermercado!
      </Text>
    </Stack>
  );
}
export default Opinions;
