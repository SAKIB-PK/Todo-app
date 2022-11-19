import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Todos from "./component/Todos/Todos";

function App() {
  return (
    <ChakraProvider>
      <Todos />
    </ChakraProvider>
  );
}

export default App;
