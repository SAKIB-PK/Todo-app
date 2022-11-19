import { Heading, IconButton, useToast, VStack } from "@chakra-ui/react";
import { useReducer, useRef } from "react";
import { FaMoon } from "react-icons/fa";
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
  const [todos, dispatch] = useReducer(reducer, []);
  const TodoInputref = useRef<HTMLInputElement>(null);
  return (
    <VStack p={4}>
      <IconButton
        icon={<FaMoon />}
        alignSelf="end"
        isRound={true}
        aria-label="Dark Mode"
        size="lg"
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
