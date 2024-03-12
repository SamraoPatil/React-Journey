import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function AddTodo({ onClickADD }) {
  let [todoName, setTodoName] = useState("");
  let [todoDate, setDueDate] = useState("");

  const handleToDoName = (event) => {
    setTodoName(event.target.value);
  };
  const handleToDoDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleClickButton = () => {
    onClickADD(todoName, todoDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleToDoName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleToDoDueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => {
              handleClickButton();
            }}
          >
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
