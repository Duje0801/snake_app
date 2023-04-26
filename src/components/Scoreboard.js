import { useContext } from "react";
import { AppContext } from "../context/Context";

function Scoreboard({ setOpenQuitModal }) {
  const { score, setGameStop, gameStop } = useContext(AppContext);

  const handleClickStop = () => {
    !gameStop ? setGameStop(true) : setGameStop(false);
  };

  const handleClickQuit = () => {
    setOpenQuitModal(true);
    setGameStop(true);
  };

  return (
    <div className="scoreboardG">
      {gameStop ? (
        <button onClick={handleClickStop}>
          Start <span className="letterG">(S)</span>
        </button>
      ) : (
        <button onClick={handleClickStop}>
          Stop <span className="letterG">(S)</span>
        </button>
      )}
      <div>Score: {score}</div>
      <button onClick={handleClickQuit}>
        Quit <span className="letterG">(Q)</span>
      </button>
    </div>
  );
}

export default Scoreboard;
