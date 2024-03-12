import ConditionalRendering from "./components/conditionalRendering";
import FavouriteItemsList from "./components/FavouritesItemsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import HealthyFoodHeading from "./components/Headings/HealthyFoods";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Bhaat", "Poli", "Bhaji", "Doodh"];
  let favourites = ["R1", "BMW", "Continental 650", "Legion 5 pro", "RX-100"];

  // Managing States via useState() hook:

  // let textState = useState("User Entered Value");
  // let textToShow = textState[0]; //useState has an array which has two values:
  // // 1] the currentValue of the state:
  // // 2] the method to change the state:
  // let stateChangeMethod = textState[1];

  // Convenient Way to Write:

  // let [textToShow, stateChangeMethod] = useState("User Entered Value:");

  let [foodItems, setFoodItems] = useState([]);

  // console.log(`current Value: ${textToShow}`);

  // const onChangeHandleEvent = (event) => {
  //   console.log(event.target.value);
  //   stateChangeMethod(event.target.value);
  // };

  const onKeyDown = (event) => {
    // Now this onKeyDown will notice each and every key we press:
    // But we want to take the event happen only when we click enter:
    if (event.key === "Enter" && !(event.target.value === "")) {
      let newfoodItems = event.target.value;

      // This will make our text box clean after we entered a value:
      event.target.value = "";

      // Here [...] is a spread operator which will add our previous elements and add our new elements and make a new array:
      let newItems = [...foodItems, newfoodItems];

      // Now we have paased our modified new array to the setFoodItems which will eventually takes the updates and makes changes to our FoodItems array , which then passes it values to its children and thus updates in our List:
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <FavouriteItemsList parentFavList={favourites} />
      </Container>

      <Container>
        <HealthyFoodHeading />
        <FoodInput handleKeydown={onKeyDown}></FoodInput>

        {/* <p>{textToShow}</p> */}

        <ConditionalRendering parentFoodList={foodItems} />
      </Container>
    </>
  );
}

export default App;

// Use of props:

// The Container that we are using here is the Child Props and the use of this is called as Passing Children :
