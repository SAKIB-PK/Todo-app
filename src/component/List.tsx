interface ListType {
  items: String[];
  onClick: (item: String) => void;
}

const List = ({ items, onClick }: ListType) => {
  return (
    <div>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick(item)}>
          {item}
        </li>
      ))}
    </div>
  );
};

export default List;
