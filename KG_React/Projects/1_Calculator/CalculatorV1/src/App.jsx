import styles from "./App.module.css";
import CalDisplay from "./components/CalDisplay";
import ButtonContainer from "./components/Buttoncontainer";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <CalDisplay />
        <ButtonContainer />
      </div>
    </>
  );
}

export default App;
