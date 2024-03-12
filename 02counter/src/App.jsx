import { useState } from "react"; // this isfrom where useState hook is called
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(5); // by passing 5 we have give default value:
  // we can give any value as a default value:
  // the return type of the useState is an array:
  // 1st parameter is a variable,2nd parameter is a function responsible to update that variable:

  //let counter = 5;
  function addValue() {
    if (counter >= 20) {
      return;
    } else {
      counter++;
      console.log("clicked", counter);
      setcounter(counter);
    }
  }

  function removeValue() {
    if (counter === 0) {
      return;
    } else {
      counter--;
      console.log("clicked", counter);
      setcounter(counter);
    }
  }

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h3>Counter Value :{counter}</h3>
      <br />
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;

//Assignment:
//In remove function value should not go beyond zero:
//In add function value should not go beyond 20:
