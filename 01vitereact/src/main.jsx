import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

{
  /* Instead of using the App function we will try to
 creat a new React element using the standards of React:  */
}
const anotherUser = "Chai aur Code";

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "Click me TO go To Google",
//  Variable injection at the end after all tags and loops and if-else:
// anotherUser

//Watch ep-3 of React series from 38:00

// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // reactElement
);
