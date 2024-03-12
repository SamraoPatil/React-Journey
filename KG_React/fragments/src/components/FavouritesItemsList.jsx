import Items from "./Items";

// Use of map method to display elements:
const FavouriteItemsList = ({ parentFavList }) => {
  // let favourites = ["R1", "BMW", "Continental 650", "Legion 5 pro", "RX-100"];
  return (
    <>
      <h1>Favourite Items List </h1>
      <ul className="list-group">
        {parentFavList.map((items) => (
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
};

export default FavouriteItemsList;

//  when ever we use any list/map then every item should have an key/ID- v alue pair:
//  this keys are used for the virtual dom by the REACT.
