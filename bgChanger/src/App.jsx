import { useState } from "react";

function App() {
  const [color, setColor] = useState("orange");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>
          <button
            onClick={() => setColor("#1F2544")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#1F2544" }}
          >
            DARK-BLUE
          </button>
          <button
            onClick={() => setColor("#561C24")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#561C24" }}
          >
            MAROON
          </button>
          <button
            onClick={() => setColor("#FAEF5D")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#FAEF5D" }}
          >
            YELLOW
          </button>
          <button
            onClick={() => setColor("#DC84F3")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#DC84F3" }}
          >
            LAVENDAR
          </button>
          <button
            onClick={() => setColor("#7B66FF")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#7B66FF" }}
          >
            SKY-BLUE
          </button>
          <button
            onClick={() => setColor("#005B41")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "#005B41" }}
          >
            OLIVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// Readme:

//  we are going to make a bgcolor changer project:
//  for this in order to hold the colors we have to make variables:
//  also as the changes will reflect with the UI so we have also make use of the states:

//  when we are using a onClick it require a function as return so instead of using it as:
// onClick={setColor()} ❌ > if we use this method then we will be calling setColor and it will be returning some value to onClick , which is not acceptable:
// onClick={() => setColor("red")} ✅

// red
//"#1F2544"
//"#561C24"
//"#FAEF5D"
//"#DC84F3"
//"#7B66FF"
//"#005B41"
