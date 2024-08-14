import Todoitem from "./Todoitem";
const Todoitems = ({ todoItems,ondeleteclick }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <Todoitem todoname={item.name} tododate={item.duedate} ondeleteclick={ondeleteclick}></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;
