import { useContext } from "react";
import { ContextTodoItems } from "../Store/todoItemsStore";

function WelcomeMsg() {
  const contextObj = useContext(ContextTodoItems);
  const todoitems = contextObj.todoitems;

  return (
    todoitems.length === 0 && (
      <>
        <h1>
          <p>Hi.. No Todo to Do Today : </p>

          <h2>
            <p>Comeon Add Your Goals For Today</p>
            <br />
          </h2>
        </h1>
      </>
    )
  );
}

export default WelcomeMsg;
