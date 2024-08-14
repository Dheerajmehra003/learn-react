import Appname from "./components/Appname";
import Todohere from "./components/Todohere";
import Todoitems from "./components/Todoitems";

import "./App.css";
import { useState } from "react";
import Welcomemessage from "./components/Welcomemessage,";

function App() {
  const [todoItems, setodoItems] = useState([]);
  const onbuttonclick = (itemname, itemduedate) => {
    console.log(`the new item is ${itemname} and ${itemduedate}`);
    const newtodoItems = [
      ...todoItems,
      { name: itemname, duedate: itemduedate },
    ];
    setodoItems(newtodoItems);
  };
  const handledeleteitem = (todoitemname) => {
    const newtodoItems = todoItems.filter((item) => item.name !== todoitemname);
    setodoItems(newtodoItems);
    console.log(`the item deleted is ${todoitemname}`);
  };

  return (
    <center className="todo-container">
      <Appname />
      <Todohere onbuttonclick={onbuttonclick} />
      {todoItems.length === 0 && <Welcomemessage />}
      <Todoitems
        todoItems={todoItems}
        ondeleteclick={handledeleteitem}
      ></Todoitems>
    </center>
  );
}

export default App;
