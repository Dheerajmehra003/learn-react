import Buttonscontainer from "./components/Buttons-container";
import Display from "./components/Display";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [CalVal, setCalVal] = useState("");
  const onButtonclick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result);
    } else {
      const newdisplayvalue = CalVal + buttonText;
      setCalVal(newdisplayvalue);
    }
  };
  return (
    <div className={styles.calculatorcontainer}>
      <div className={styles.info}>
      Calculator with Reactjs
      </div>
    <div className={styles.calculator}>
      <Display displayvalue={CalVal} />
      <Buttonscontainer onButtonclick={onButtonclick} />
    </div>
    </div>
  );
}

export default App;
