import { useReducer, useRef } from "react";
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
  const onClick = () => {
    if (TodoInputref.current) {
      let text = TodoInputref.current.value;
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
    <div>
      <TodoInput TodoInputref={TodoInputref} onClick={onClick} />
      <TodoList
        todos={todos}
        onRemove={(id: number) => dispatch({ type: "REMOVE", id: id })}
      />
    </div>
  );
};

export default Todos;
