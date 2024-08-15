import Fooditems from "./components/Fooditems";
import Errormessage from "./components/Errormessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Fooditem from "./components/Fooditem";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setfoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="info">Healthy food</h1>
        <Fooditem handleKeyDown={onKeyDown}></Fooditem>
        <Errormessage items={foodItems}></Errormessage>
        <Fooditems items={foodItems}></Fooditems>
      </Container>

      {/* <Container>
        <p>Above the list of food which are good for health</p>
      </Container> */}
    </>
  );
}
export default App;
