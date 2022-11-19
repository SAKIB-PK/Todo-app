import {
  Heading,
  IconButton,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useReducer, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface TodoType {
  id: number;
  text: String;
}
type actionType =
  | { type: "ADD"; text: String }
  | { type: "REMOVE"; id: number };

const Todos = () => {
  const toast = useToast();
  const toastIdRef = useRef();
  let { colorMode, toggleColorMode } = useColorMode();
  const onClick = () => {
    if (TodoInputref.current) {
      let text = TodoInputref.current.value;
      // if input is empty then toast appear
      if (!text) {
        let toastRef: string | undefined | number = toastIdRef.current;
        toastRef = toast({
          title: `No Content`,
          status: "error",
          isClosable: true,
        });
        return;
      }
      dispatch({ type: "ADD", text: text });
      TodoInputref.current.value = "";
    }
  };

  function reducer(state: TodoType[], action: actionType) {
    switch (action.type) {
      case "ADD":
        return [...state, { id: state.length, text: action.text }];

      case "REMOVE":
        return state.filter(({ id }) => action.id !== id);
    }
  }
  const localSTodo = localStorage.getItem("todos");
  const [todos, dispatch] = useReducer(
    reducer,
    localSTodo ? JSON.parse(localSTodo) : []
  );
  const TodoInputref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        alignSelf="end"
        isRound={true}
        aria-label="Dark Mode"
        size="lg"
        onClick={toggleColorMode}
      />
      <Heading size="2xl" mb={12} fontWeight="extrabold">
        TODO Application
      </Heading>
      <TodoInput TodoInputref={TodoInputref} onClick={onClick} />
      <TodoList
        todos={todos}
        onRemove={(id: number) => dispatch({ type: "REMOVE", id: id })}
      />
    </VStack>
  );
};

export default Todos;
