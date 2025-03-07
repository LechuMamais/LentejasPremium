import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100svh" w="100vw">
      <Header></Header>
      <Box as="main" flex="1"></Box>
      <Footer></Footer>
    </Box>
  );
}

export default App;
