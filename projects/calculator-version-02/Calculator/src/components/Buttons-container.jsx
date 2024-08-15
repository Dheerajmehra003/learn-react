import styles from "./Buttonscontainer.module.css";

function Buttonscontainer({ onButtonclick }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttoncontainer}>
      {buttonNames.map((buttonname) => (
        <button
          className={styles.button}
          onClick={() => onButtonclick(buttonname)}
        >
          {buttonname}
        </button>
      ))}
    </div>
  );
}

export default Buttonscontainer;
