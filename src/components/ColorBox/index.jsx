import { useState } from "react";
import "./ColorBox.scss";
const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "deepskyblue", "green", "yellow", "black"];
  const randomIndex = Math.floor(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
};
function ColorBox() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("color") || "deeppink";
  });
  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  };
  return (
    <>
      <h1>Color Box</h1>
      <div
        className="colorBox"
        style={{ backgroundColor: color }}
        onClick={handleBoxClick}
      >
        COLOR BOX
      </div>
    </>
  );
}

export default ColorBox;
