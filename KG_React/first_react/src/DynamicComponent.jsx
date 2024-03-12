function DynamicComponent() {
  let number = 356;

  let fullname = () => {
    let expression = "I am Vasudev Putr : Rohan from Tayde Vansh";
    return expression;
  };

  return (
    <div>
      <h2>Hii..This is your Developer Not_an_Inluencer</h2>
      <span>This is my {number}th of project</span>
      <p>I am from Amravati, and I am {fullname()}</p>
    </div>
  );
}

export default DynamicComponent;
