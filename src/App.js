import { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOnClick = () => {
    color === "MediumVioletRed"
      ? setColor("MidnightBlue")
      : setColor("MediumVioletRed");
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
        {color === "MediumVioletRed"
          ? `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`
          : `Change to ${replaceCamelCaseWithSpaces("MediumVioletRed")}`}
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
