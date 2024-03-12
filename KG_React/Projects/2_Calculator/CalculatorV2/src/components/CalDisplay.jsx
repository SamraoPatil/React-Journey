import styles from "./Display.module.css";

function CalDisplay({ displayItems }) {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayItems}
      readOnly
    />
  );
}

export default CalDisplay;
