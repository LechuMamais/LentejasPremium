import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

function About() {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(2, 1fr)"
      h={"2250px"}
    >
      <GridItem
        p={"48px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={8}
      >
        <Text fontSize={"24px"} color={"primary"} m={0}>
          SOMOS
        </Text>
        <Text fontSize={"48px"} color={"primary"} m={0}>
          SOSTENIBLES
        </Text>
        <Text fontSize={"18px"} color={"primary"} m={0}>
          Trabajamos directamente con agricultores locales, que utilizan métodos
          respetuosos con el medio ambiente, para ofrecer productos naturales de
          calidad, sin aditivos ni conservantes artificiales, garantizando
          frescura y sabor para tus comidas.
        </Text>
      </GridItem>
      <GridItem overflow={"hidden"}>
        <Image src="/images/campolentejas.jpg"></Image>
      </GridItem>
      <GridItem overflow={"hidden"}>
        <Image src="/images/lentejas1.jpg"></Image>
      </GridItem>
      <GridItem
        p={"48px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={8}
      >
        <Text fontSize={"24px"} color={"primary"} m={0}>
          SOMOS
        </Text>
        <Text fontSize={"48px"} color={"primary"} m={0}>
          CALIDAD
        </Text>
        <Text fontSize={"18px"} color={"primary"} m={0}>
          Nos obsesionan los detalles.\nPor eso nos aseguramos que cada grano,
          cada semilla, cumpla con estrictos controles de calidad, para que
          todas tus comidas estén al nivel que te mereces.
        </Text>
      </GridItem>
      <GridItem
        colSpan={2}
        p={"48px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={8}
      >
        <Text fontSize={"60px"} color={"primary"} m={0}>
          SOMOS
        </Text>
        <Text fontSize={"18px"} color={"primary"} m={0}>
          Una empresa familiar fundada en 2018 con el objetivo de llevar lo
          mejor del campo a tu mesa.
        </Text>{" "}
        <Text fontSize={"18px"} color={"primary"} m={0}>
          Producir y comercializar productos de primera calidad es nuestro ADN.
        </Text>{" "}
        <Text fontSize={"18px"} color={"primary"} m={0}>
          Nutrirte nuestro fin
        </Text>
      </GridItem>
    </Grid>
  );
}
export default About;
