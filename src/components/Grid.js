import { useEffect } from "react";
import GridColors from "../logic/GridColors";

function Grid({ snakeArray, foodPosition, size, boardG }) {
  const colors = GridColors();

  //Setting up grid
  useEffect(() => {
    const currentBoardG = boardG.current;
    currentBoardG.style.backgroundColor = `${colors[1]}`;
    currentBoardG.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    currentBoardG.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }, []);

  const gridBoxArray = [];

  for (let i = 1; i <= size * size; i++) {
    gridBoxArray.push(i);
  }

  return gridBoxArray.map((boxNumber) => {
    // If this box is using snake array or food put black/white background
    if (snakeArray.includes(boxNumber) || foodPosition === boxNumber)
      return (
        <div
          style={{ margin: `1px`, backgroundColor: `${colors[0]}` }}
          key={boxNumber}
        ></div>
      );
    // Other boxes
    return <div style={{ margin: `1px` }} key={boxNumber}></div>;
  });
}

export default Grid;
