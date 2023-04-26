import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Board from "../components/Board";
import GameOverModal from "../components/GameOverModal";
import Scoreboard from "../components/Scoreboard";
import QuitModal from "../components/QuitModal";
import Joystick from "../components/Joystick";
import routes from "../routes/Routes";
import "../styles/Game.css";

function Game() {
  const [openGOModal, setOpenGOModal] = useState(false);
  const [openQuitModal, setOpenQuitModal] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const navigate = useNavigate();

  // Redirecting to Main menu in case of refresh page during game
  useEffect(() => {
    if (sessionStorage.reload && window.location.pathname !== "/") {
      sessionStorage.reload = "";
      return navigate(routes.mainMenu);
    }
    sessionStorage.reload = true;
  }, []);

  if (countdown > 0) {
    setTimeout(() => setCountdown(countdown - 1), 1000);
    return <div className="countingNumberG">{countdown}</div>;
  }

  return (
    <div className="gameG">
      <div>
        <Scoreboard setOpenQuitModal={setOpenQuitModal} />
        <Board
          setOpenGOModal={setOpenGOModal}
          setOpenQuitModal={setOpenQuitModal}
        />
        {openGOModal && <GameOverModal />}
        {openQuitModal && <QuitModal setOpenQuitModal={setOpenQuitModal} />}
      </div>
      <Joystick />
    </div>
  );
}

export default Game;
