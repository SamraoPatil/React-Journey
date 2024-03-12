import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import AddTodo2useRef from "./components/AddTodo2useRef";
import { useState } from "react";
import "./App.css";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  let initialList = [];
  let [todoItemsList, setTodoItemsList] = useState(initialList);

  function onClickADD(todoName, todoDate) {
    let newList = [
      ...todoItemsList,
      {
        work: todoName,
        Date: todoDate,
      },
    ];

    setTodoItemsList(newList);
  }

  const handleDeleteButton = (deletedItem) => {
    let newTodoList = todoItemsList.filter((item) => item.work !== deletedItem);
    setTodoItemsList(newTodoList);
    console.log(`Item deleted: ${deletedItem}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      {todoItemsList.length === 0 && <WelcomeMsg />}

      {/* <AddTodo onClickADD={onClickADD} /> */}
      <AddTodo2useRef onClickADD={onClickADD} />
      <TodoContainer todoList={todoItemsList} ondelete={handleDeleteButton} />
    </center>
  );
}

export default App;
