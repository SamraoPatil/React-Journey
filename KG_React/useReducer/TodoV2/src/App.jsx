import AppName from "./components/AppName";
import TodoContainer from "./components/TodoContainer";
import AddTodo2useRef from "./components/AddTodo2useRef";
import "./App.css";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsProvider from "./Store/todoItemsStore";

function App() {
  return (
    <TodoItemsProvider>
      <center className="todo-container">
        <AppName />
        <WelcomeMsg />
        <AddTodo2useRef />
        <TodoContainer />
      </center>
    </TodoItemsProvider>
  );
}

export default App;
