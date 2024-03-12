import styles from "./App.module.css";
import CalDisplay from "./components/CalDisplay";
import ButtonContainer from "./components/Buttoncontainer";
import { useState } from "react";

function App() {
  let [displayItems, setDisplayItems] = useState("");
  const onChange = (buttonList) => {
    console.log(buttonList);

    if (buttonList === "C") {
      setDisplayItems("");
    } else if (buttonList === "=") {
      let result = eval(displayItems);
      setDisplayItems(result);
    } else {
      let newDisplay = displayItems + buttonList;
      setDisplayItems(newDisplay);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <CalDisplay displayItems={displayItems} />
        <ButtonContainer onChange={onChange} />
      </div>
    </>
  );
}

export default App;
