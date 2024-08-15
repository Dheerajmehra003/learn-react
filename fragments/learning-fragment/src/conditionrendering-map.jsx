function App2() {
  // let fooditems = [];
  let fooditems = [
    "dal",
    "vegetables",
    "roti",
    "milk",
    "salad",
    "ghee",
    "dahee",
    "rice",
  ];
  return (
    <>
      {/* <h1>Healthy Food</h1>
        <ul class="list-group">
          <li class="list-group-item">dal</li>
          <li class="list-group-item">roti</li>
          <li class="list-group-item">vegetables</li>
          <li class="list-group-item">milk</li>
          <li class="list-group-item">salad</li>
        </ul> */}

      {/* using maps --->*/}

      <h1>Healthy food</h1>
      {fooditems.length === 0 ? <h1>i am still hungry</h1> : null}
      <ul class="list-group">
        {fooditems.map((item) => (
          <li key={item} class="list-group-item">
            {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App2;
