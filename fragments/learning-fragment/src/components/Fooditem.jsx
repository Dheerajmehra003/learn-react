import styles from "./Fooditem.module.css";

function Fooditem({handleKeyDown}) {
  return (
    <input
      className={styles.foodinput}
      type="text"
      placeholder="enter the food item here"
      onKeyDown={handleKeyDown}
    ></input>
  );
}

export default Fooditem;
