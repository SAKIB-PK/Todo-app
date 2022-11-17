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
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onTodoRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TodoList;
