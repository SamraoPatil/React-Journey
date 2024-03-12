import styles from "./Item.module.css";

// const Items = (props) => {
//   return (
//     <>
//       <li className="list-group-item">{props.listItems}</li>
//     </>
//   );
// };

// const Items = ({ listItems }) => {
//   return (
//     <>
//       <li className="list-group-item">{listItems}</li>
//     </>
//   );
// };

// Example of CSS Modules:
const Items = ({ listItems, handleClickButton }) => {
  return (
    <>
      <li className={` ${styles.our_item} `}>
        {listItems}
        <button
          className={`${styles.Button} btn btn-outline-success `}
          onClick={handleClickButton}
        >
          BUY
        </button>
      </li>
    </>
  );
};

export default Items;
