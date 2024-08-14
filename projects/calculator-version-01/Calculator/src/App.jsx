import Buttonscontainer from "./components/Buttons-container";
import Display from "./components/Display";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <Buttonscontainer />
    </div>
  );
}

export default App;
