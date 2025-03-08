import { Box, Flex, Image } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Section1 from "./components/Section1";
import ProductsSection from "./components/ProductsSection";
import About from "./components/About";

function App() {
  return (
    <>
      <Header></Header>
      <Flex flexDirection="column" minHeight="100svh" w="100vw">
        <Box as="main" flex="1" bgColor={"bgCustom"}>
          <Slider></Slider>
          <Section1></Section1>
          <ProductsSection></ProductsSection>
          <About></About>
          <Image
            src="/images/ParallaxImage.jpg"
            w={"100svw"}
            h={"120px"}
          ></Image>
        </Box>
        <Footer></Footer>
      </Flex>
    </>
  );
}

export default App;
