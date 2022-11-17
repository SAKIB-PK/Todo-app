const TodoInput = ({
  onClick,
  TodoInputref,
}: {
  onClick: () => void;
  TodoInputref: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <div>
      <input ref={TodoInputref} />
      <input type="submit" value="ADD" onClick={onClick} />
    </div>
  );
};

export default TodoInput;
