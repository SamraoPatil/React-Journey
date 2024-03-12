import Items from "./Items";

function ConditionalRendering({ parentFoodList }) {
  // let foodItems = [];
  //  let foodItems = ["Dal", "Bhaat", "Poli", "Bhaji", "Doodh"];

  // First Conditional Rendering
  // if (foodItems.length === 0) {
  //   return <h3>Food-List Empty</h3>;
  // }

  // Second Ternary Operator
  // let empty = foodItems.length === 0 ? <h3>Food List Empty</h3> : null;

  return (
    <>
      {/* {empty} */}

      {/* Third Truthy Falsy Value */}
      {parentFoodList.length === 0 && (
        <h3>
          <span>Food-List is Empty</span>
          <p>Please Enter Items to the List:</p>
        </h3>
      )}
      <ul className="list-group">
        {parentFoodList.map((items) => (
          <Items
            key={items}
            listItems={items}
            handleClickButton={() => {
              console.log(`${items} being bought`);
            }}
          />
        ))}
      </ul>
    </>
  );
}

export default ConditionalRendering;
