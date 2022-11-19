import { StackDivider, VStack } from "@chakra-ui/react";
import { TodoItem } from "./TodoItem";

interface Todo {
  id: number;
  text: String;
}

const TodoList = ({
  todos,
  onRemove,
}: {
  todos: Todo[];
  onRemove: (id: number) => void;
}) => {
  return (
    <VStack
      divider={<StackDivider />}
      borderWidth="thin"
      padding={4}
      borderColor="gray.100"
      borderRadius={5}
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onTodoRemove={onRemove} />
      ))}
    </VStack>
  );
};

export default TodoList;
