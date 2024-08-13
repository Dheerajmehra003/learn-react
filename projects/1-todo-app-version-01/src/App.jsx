import Appname from "./components/Appname";
import Todohere from "./components/Todohere";
import Todoitems from "./components/Todoitems";

import "./App.css";

function App() {
  let todoItems = [
    {
      name: "buy milk",
      duedate: "13-08-2024",
    },
    {
      name: "Go to college",
      duedate: "13-08-2024",
    },
    {
      name: "excercise",
      duedate: "15-08-2024",
    },
  ];

  return (
    <center className="todo-container">
      <Appname />
      <Todohere />
      <Todoitems todoItems={todoItems}></Todoitems>
    </center>
  );
}

export default App;
