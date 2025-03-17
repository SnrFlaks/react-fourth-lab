import { useState, useEffect } from "react";

const ColorBlock = () => {
  const [color, setColor] = useState("yellow");

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "yellow" ? "blue" : "yellow"));
  };

  useEffect(() => {
    console.log(`Поточний колір: ${color}`);
  }, [color]);

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "200px auto",
        border: "1px solid black",
      }}
    >
      <button onClick={toggleColor}>Змінити колір</button>
    </div>
  );
};

export default ColorBlock;
