function Todohere() {
  return (
    <div className="container">
      <div className="row DM-row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-success DM-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todohere;
