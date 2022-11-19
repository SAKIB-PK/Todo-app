import { Button, HStack, Input } from "@chakra-ui/react";

const TodoInput = ({
  onClick,
  TodoInputref,
}: {
  onClick: () => void;
  TodoInputref: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <HStack p={4}>
      <Input
        variant="filled"
        focusBorderColor="purple.500"
        ref={TodoInputref}
        placeholder="What to do?"
      />
      <Button colorScheme="purple" variant="outline" onClick={onClick}>
        ADD
      </Button>
    </HStack>
  );
};

export default TodoInput;
