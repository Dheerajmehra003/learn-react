import { useState } from "react";

function Todohere({ onbuttonclick }) {
  const [todoname, settodoname] = useState(" ");
  const [tododate, settododate] = useState(" ");

  const handletodoname = (event) => {
    settodoname(event.target.value);
  };
  const handletododate = (event) => {
    settododate(event.target.value);
  };
  const handleonbuttonclicked = () => {
    onbuttonclick(todoname, tododate);
    settododate(" ");
    settodoname(" ");
  };
  return (
    <div className="container">
      <div className="row DM-row">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoname}
            onChange={handletodoname}
          />
        </div>
        <div className="col-4">
          <input type="date" value={tododate} onChange={handletododate} />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success DM-button"
            onClick={handleonbuttonclicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todohere;
