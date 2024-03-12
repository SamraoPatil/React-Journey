import styles from "./Button.module.css";

function ButtonContainer() {
  const buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttonList.map((buttonList) => (
          <button className={styles.button}>{buttonList}</button>
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
