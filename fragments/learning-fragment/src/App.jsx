import Fooditems from "./components/Fooditems";
import Errormessage from "./components/Errormessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let fooditems = [];
  let foodItems = [ "sabzi", "dal", "vegetables", "roti","milk","salad","ghee","dahee","rice",];
  return (
    <>
     <h1>Healthy food</h1>
     <Errormessage items={foodItems}></Errormessage>
     <Fooditems items={foodItems}></Fooditems>
    </>
  );
}
export default App;
