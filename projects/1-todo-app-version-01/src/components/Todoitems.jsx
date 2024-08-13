import Todoitem from "./Todoitem";
const Todoitems = ({ todoItems }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <Todoitem todoname={item.name} tododate={item.duedate}></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;
