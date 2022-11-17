import List from "./List";

const Lists = () => {
  const items: String[] = ["Sakib", "Tamim", "Nasir", "Apu"];
  const onClick = (text: String): void => alert(text);
  return <div>{<List items={items} onClick={onClick} />}</div>;
};

export default Lists;
