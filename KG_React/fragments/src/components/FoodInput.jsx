import styles from "./FoodInput.module.css";

function FoodInput({ handleKeydown }) {
  return (
    <>
      <input
        type="text "
        placeholder="Enter Food Item"
        className={styles.FoodInput}
        // onChange={onChangeHandleEvent}
        //Adding a new event which will give us the changes as per the keys are typed:

        onKeyDown={handleKeydown}
      />
    </>
  );
}

export default FoodInput;
