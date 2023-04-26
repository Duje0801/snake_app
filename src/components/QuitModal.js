import { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import { AppContext } from "../context/Context";
import QuitModalKD from "../logic/keydowns/QuitModalKD";
import routes from "../routes/Routes";

function QuitModal({ setOpenQuitModal }) {
  const { setGameStop } = useContext(AppContext);

  const navigate = useNavigate();

  const handleYes = () => {
    sessionStorage.reload = "";
    navigate(routes.mainMenu);
    setGameStop(false);
    setOpenQuitModal(false);
  };

  const handleNo = () => {
    setGameStop(false);
    setOpenQuitModal(false);
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      QuitModalKD(e, handleYes, handleNo);
    };

    window.addEventListener(`keydown`, handleKeydown);
    return () => window.removeEventListener(`keydown`, handleKeydown);
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="modalBackgroundG">
        <div className="modalG additionModalG">
          <div>Are you sure</div>
          <div>you want to quit?</div>
          <div>
            <button onClick={handleYes} className="modalBtnG">
              Yes <span className="letterG">(Y)</span>
            </button>
            <button onClick={handleNo} className="modalBtnG">
              No <span className="letterG">(N)</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default QuitModal;
