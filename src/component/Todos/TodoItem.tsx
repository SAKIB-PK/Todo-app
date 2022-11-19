import { HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Todo {
  id: number;
  text: String;
}
export const TodoItem = ({
  todo,
  onTodoRemove,
}: {
  todo: Todo;
  onTodoRemove: (id: number) => void;
}) => {
  return (
    <HStack>
      <Text>{todo.text}</Text>
      <Spacer />
      <IconButton
        aria-label="Remove Button"
        icon={<FaTrash />}
        isRound={true}
        onClick={() => onTodoRemove(todo.id)}
      />
      <IconButton
        aria-label="Edit Button"
        icon={<FaEdit />}
        isRound={true}
        onClick={() => onTodoRemove(todo.id)}
      />
    </HStack>
  );
};
