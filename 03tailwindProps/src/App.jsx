import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/cards";

function App() {
  const myObj = {
    name: "user1",
    age: 34,
  };
  let newArr = [1, 2, 3, 4, 54];
  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-4 ">
        Tail-Wind Test
      </h1>

      {/* Below we can see how we pass variables,objects,arrays to a component: */}
      {/* <Card username="notAnInfluncer" sampleObj={myObj} newArr={newArr} /> */}

      <Card username="notAnInfluencer" btntext="Click-Me" />
      <Card username="Raveena" btntext="Visit-Me" />
      <Card />
    </>
  );
}

export default App;

// Props make components resuable:
