import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./App.css";
import Todos from "./component/Todos/Todos";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="system" />
      <Todos />
    </ChakraProvider>
  );
}

export default App;
