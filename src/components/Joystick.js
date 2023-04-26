import { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
  BsArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from "react-icons/bs";
import CheckDirection from "../logic/CheckDirection";

function Joystick() {

  //State fixes bug when joystick buttons are pressed twice in one snakeArray render 
  const [testSnakeArray, setTestSnakeArray] = useState([])

  const { snakeArray, direction, setDirection } = useContext(AppContext);

  const handleClick = (d) => {
    if (snakeArray === testSnakeArray || !CheckDirection(d, direction)) return;
    setTestSnakeArray(snakeArray)
    setDirection(d);
  };

  return (
    <div className="joystickG">
      <div>
        <BsFillArrowUpSquareFill
          onClick={() => handleClick("ArrowUp")}
          className="joystickBtnG"
        />
      </div>
      <div>
        <BsFillArrowLeftSquareFill onClick={() => handleClick("ArrowLeft")} />
        <div className="joystickMiddleG"></div>
        <BsFillArrowRightSquareFill onClick={() => handleClick("ArrowRight")} />
      </div>
      <div>
        <BsArrowDownSquareFill onClick={() => handleClick("ArrowDown")} />
      </div>
    </div>
  );
}

export default Joystick;
