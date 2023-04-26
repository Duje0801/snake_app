import { AppContext } from "../context/Context";
import { useContext } from "react";

function GridColors() {
  const { theme } = useContext(AppContext);

  let snakeColor = "black";
  let bgColor = "white";

  if (theme === "Mobile") {
    bgColor = "green";
  }
  if (theme === "Black") {
    snakeColor = "white";
    bgColor = "black";
  }

  return [snakeColor, bgColor];
}

export default GridColors;
