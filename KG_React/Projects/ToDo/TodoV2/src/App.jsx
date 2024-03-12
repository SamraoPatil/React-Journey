import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoContainer from "./components/TodoContainer";
import "./App.css";

function App() {
  const list = [
    {
      work: "Buy Grocerries",
      Date: "4/10/2023",
    },
    {
      work: "Revise React",
      Date: "5/10/2023",
    },
    {
      work: "Do Protfolio",
      Date: "5/10/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoContainer todoList={list} />
    </center>
  );
}

export default App;
