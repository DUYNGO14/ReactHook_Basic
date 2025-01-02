import { useState, useEffect, useRef } from "react";

const listColor = ["red", "blue", "green", "yellow", "black"];

function getRandomColor(currentColor) {
  const index = listColor.indexOf(currentColor);
  const nextIndex = (index + 1) % listColor.length;
  return listColor[nextIndex];
}

const useMagicColor = () => {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = getRandomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return color;
};

export default useMagicColor;

