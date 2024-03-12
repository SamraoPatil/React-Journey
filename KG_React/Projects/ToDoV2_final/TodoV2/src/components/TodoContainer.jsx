import styles from "./ItemsContainer.module.css";

import TodoItems from "./TodoItems";

function TodoContainer({ todoList, ondelete }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoList.map((items) => (
          <TodoItems
            key={items.work}
            todoName={items.work}
            todoDate={items.Date}
            onDeleteItem={ondelete}
          />
        ))}
      </div>
    </>
  );
}

export default TodoContainer;
