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
    <li>
      {todo.text}&nbsp;
      <button onClick={() => onTodoRemove(todo.id)}>X</button>
      <button>#</button>
    </li>
  );
};
