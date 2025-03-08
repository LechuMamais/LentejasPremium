import { Box, Image } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Section1 from "./components/Section1";
import ProductsSection from "./components/ProductsSection";
import About from "./components/About";
import Opinions from "./components/Opinions";

function App() {
  return (
    <>
      <Header></Header>

      <Box as="main" flex="1" bgColor={"bgCustom"} w="100vw">
        <Slider />
        <Section1 />
        <ProductsSection />
        <About />
        <Image src="/images/ParallaxImage.jpg" w={"100svw"} h={"120px"}></Image>
        <Opinions />
      </Box>

      <Footer></Footer>
    </>
  );
}

export default App;
