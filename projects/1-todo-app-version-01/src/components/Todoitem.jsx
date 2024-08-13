function Todoitem({todoname,tododate}) {
  
  
    return (
      <div className="container">
        <div className="row DM-row">
          <div className="col-6">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger DM-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Todoitem;
  