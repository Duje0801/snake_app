import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { AppContext } from "../context/Context";
import MappingGOModalOptions from "../logic/MappingGOModalOptions";
import GameOverModalKD from "../logic/keydowns/GameOverModalKD";
import routes from "../routes/Routes";
import gameOverSound from "../sounds/game-over.wav";
import highScoreSound from "../sounds/high-score.wav";

function GameOverModal() {
  const [number, setNumber] = useState(0);
  const [isHighScore, setIsHighScore] = useState(false);
  const [redirectToMM, setRedirectToMM] = useState(false);

  const { score, firstHighScore, setFirstHighScore } = useContext(AppContext);

  const navigate = useNavigate();

  const options = ["Play Again", "Main Menu"];

  //Check if player selected Main menu option
  useEffect(() => {
    if (redirectToMM) return navigate(routes.mainMenu);
  }, [redirectToMM]);

  useEffect(() => {
    if (score > 0 && score > firstHighScore) {
      new Audio(highScoreSound).play();
      setFirstHighScore(score);
      setIsHighScore(true);
    } else new Audio(gameOverSound).play();
  }, []);

  const handleChangeRoute = (number) => {
    sessionStorage.reload = "";
    number === 0 ? navigate(0) : setRedirectToMM(true);
  };

  const handleOptions = () => {
    number === 0 ? setNumber(1) : setNumber(0);
  };

  const mappedOptions = MappingGOModalOptions(
    options,
    number,
    handleChangeRoute
  );

  useEffect(() => {
    const handleKeydown = (e) => {
      GameOverModalKD(e, number, handleOptions, handleChangeRoute);
    };

    window.addEventListener(`keydown`, handleKeydown);
    return () => window.removeEventListener(`keydown`, handleKeydown);
  }, [number]);

  // Directly returning to Main Menu
  return ReactDOM.createPortal(
    <div>
      <div className="modalBackgroundG">
        <div className="modalG">
          <div>Game over!</div>
          {isHighScore && <div className="highScoreAniG">New High Score!</div>}
          <div>Score: {score}</div>
          <div>
            <GoArrowLeft onClick={() => handleOptions()} className="arrowsG" />
            {mappedOptions}
            <GoArrowRight onClick={() => handleOptions()} className="arrowsG" />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default GameOverModal;
