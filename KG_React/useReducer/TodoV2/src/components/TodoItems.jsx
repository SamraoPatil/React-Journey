import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { ContextTodoItems } from "../Store/todoItemsStore";

function TodoItems({ todoName, todoDate }) {
  const { deleteItem } = useContext(ContextTodoItems);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => {
              deleteItem(todoName);
            }}
          >
            <TiDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
