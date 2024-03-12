import { useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
import { useContext } from "react";
import { ContextTodoItems } from "../Store/todoItemsStore";

function AddTodo2useRef() {
  const contextObj = useContext(ContextTodoItems);
  const addNewItem = contextObj.addNewItem;
  // let [todoName, setTodoName] = useState("");
  // let [todoDate, setDueDate] = useState("");

  const todoNameElement = useRef();
  // now this can be passed to the ref() attribute within the input tag so that we can avoid the onchange to less the repaints:
  const dueDateElement = useRef();

  //  As we have created a useRef for both name and duedate
  //  and also we handled them in the input tag using the ref() so now we dont need this methods:

  //   const handleToDoName = (event) => {
  //     // setTodoName(event.target.value);
  // };
  //   const handleToDoDueDate = (event) => {
  //     setDueDate(event.target.value);
  //   };

  const handleClickButton = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, todoDate);

    // As we are not using useState() so we dont this set methods also:

    // setTodoName("");
    // setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}

            // value={todoName}
            // onChange={handleToDoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}

            // value={todoDate}
            // onChange={handleToDoDueDate}
          />
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
export default AddTodo2useRef;

// In this 2 AddTodo we will replace useState() by useRef() :
// We are using this to avoid n numbers of repaints of our UI:
// By using useRef() we can change the calue of our props, components and also lessen the number of repainting of our whole page:
// useRef allows access to DOM elements and retains mutuable values without RE-RENDER:
// We use the ref Attribute:
// Can hold the previous state and props value:
// Refs can also be passed as Props value:
