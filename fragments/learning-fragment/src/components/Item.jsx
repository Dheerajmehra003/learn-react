import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  const handleBuyButtonclicked = (event) => {
    console.log(event);
    console.log(`item being brought is ${foodItems}`);
  };
  return (
    <li className="list-group-item">
      {" "}
      {foodItems}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonclicked(event)}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
