import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOnClick = () => {
    color === "red" ? setColor("blue") : setColor("red");
  };

  const handleCheckbox = (e) => {
    setIsDisabled(e.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : color }}
        onClick={handleOnClick}
        disabled={isDisabled}
      >
        {color === "red" ? "Change to blue" : "Change to red"}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={isDisabled}
        onChange={handleCheckbox}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
