import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  BsArrowLeftSquareFill,
  BsArrowUpSquareFill,
  BsArrowDownSquareFill,
  BsArrowRightSquareFill,
} from "react-icons/bs";
import routes from "../routes/Routes";

function Controls() {
  const navigate = useNavigate();

  //Exiting controls after clicking button exit
  const handleBackClick = () => {
    navigate(routes.settings);
  };

  //Exiting after pressing certain keys on the keyboard
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "KeyQ" || e.code === `Escape`) handleBackClick();
    };

    window.addEventListener(`keydown`, handleKeydown);
    return () => window.removeEventListener(`keydown`, handleKeydown);
  }, []);

  return (
    <>
      <div className="controlsS">
        <div>
          <BsArrowUpSquareFill /> - Up
        </div>
        <div>
          <BsArrowDownSquareFill /> - Down
        </div>
        <div>
          <BsArrowLeftSquareFill /> - Left
        </div>
        <div>
          <BsArrowRightSquareFill /> - Right
        </div>
        <div>S - Stop/Start</div>
        <div>Q - Quit</div>
      </div>
      <button onClick={handleBackClick} className="controlsBtnS">
        Quit<span className="letterS">(Q)</span>
      </button>
    </>
  );
}

export default Controls;
