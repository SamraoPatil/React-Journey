import styles from "./ItemsContainer.module.css";
import { ContextTodoItems } from "../Store/todoItemsStore";
import TodoItems from "./TodoItems";
import { useContext } from "react";

function TodoContainer() {
  const { todoitems } = useContext(ContextTodoItems);
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoitems.map((items) => (
          <TodoItems
            key={items.work}
            todoName={items.work}
            todoDate={items.Date}
          />
        ))}
      </div>
    </>
  );
}

export default TodoContainer;
