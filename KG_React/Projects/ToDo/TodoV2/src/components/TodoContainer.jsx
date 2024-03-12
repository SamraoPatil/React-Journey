import styles from "./ItemsContainer.module.css";

import TodoItems from "./TodoItems";

function TodoContainer({ todoList }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoList.map((items) => (
          <TodoItems todoName={items.work} todoDate={items.Date} />
        ))}
      </div>
    </>
  );
}

export default TodoContainer;
