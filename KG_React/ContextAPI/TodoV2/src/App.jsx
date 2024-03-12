import AppName from "./components/AppName";
import TodoContainer from "./components/TodoContainer";
import AddTodo2useRef from "./components/AddTodo2useRef";
import { useState } from "react";
import "./App.css";
import WelcomeMsg from "./components/WelcomeMsg";
import { ContextTodoItems } from "./Store/todoItemsStore";

function App() {
  let [todoItemsList, setTodoItemsList] = useState([]);

  const addNewItem = (todoName, todoDate) => {
    let newList = [
      ...todoItemsList,
      {
        work: todoName,
        Date: todoDate,
      },
    ];
    setTodoItemsList(newList);
  };

  const deleteItem = (deletedItem) => {
    let newTodoList = todoItemsList.filter((item) => item.work !== deletedItem);
    setTodoItemsList(newTodoList);
    console.log(`Item deleted: ${deletedItem}`);
  };

  return (
    <ContextTodoItems.Provider
      value={{
        todoitems: todoItemsList,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <WelcomeMsg />
        <AddTodo2useRef />
        <TodoContainer />
      </center>
    </ContextTodoItems.Provider>
  );
}

export default App;
