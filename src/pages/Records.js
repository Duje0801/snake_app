import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../context/Context";
import RecordsOptions from "../components/RecordsOptions";
import FilteringHS from "../logic/FilteringHS";
import FilterForDisplaying from "../logic/FilterForDisplaying";
import RecordsKD from "../logic/keydowns/RecordsKD";
import Options from "../data/Options";
import routes from "../routes/Routes";
import "../styles/Records.css";

function Records() {
  const [sorting, setSorting] = useState({ difficulty: `All`, size: `All` });
  const [setting, setSetting] = useState(``);
  const [number, setNumber] = useState(1);

  const { highScore } = useContext(AppContext);

  const navigate = useNavigate();

  // Getting possible difficulties and sizes
  const dataOptions = Options();
  const difficultyOptions = dataOptions.difficultyOptions;
  const sizeOptions = dataOptions.sizeOptions;

  // Getting all highscores in new array
  let HSlist = [...highScore];

  const handleShowAll = () => {
    setSorting({ difficulty: `All`, size: `All` });
    setSetting(``);
    setNumber(1);
  };

  const handleQuit = () => {
    navigate(routes.mainMenu);
  };

  // If one of the settings is selected to be filtered
  const filteringHSbySetting = (number, title) => {
    // Making new object
    let changeCurrent = {};
    title === `Difficulty`
      ? (changeCurrent = { difficulty: difficultyOptions[number].value })
      : (changeCurrent = { size: sizeOptions[number].value });

    //New object is replacing element with same key from main object
    setSorting((current) => {
      if (number === `All`) return { difficulty: `All`, size: `All` };
      if (changeCurrent?.difficulty)
        return { ...current, difficulty: changeCurrent.difficulty };
      if (changeCurrent?.size) return { ...current, size: changeCurrent.size };
    });
  };

  // New list which consist only selected category
  const filteredHS = FilteringHS(HSlist, sorting);

  // Make new table with records from selected category
  const displayHS = FilterForDisplaying(filteredHS);

  // Changing records to show after pressing certain keys on the keyboard
  useEffect(() => {
    const handleKeydown = (e) => {
      RecordsKD(
        e,
        number,
        setting,
        handleQuit,
        handleShowAll,
        setSetting,
        setNumber,
        filteringHSbySetting
      );
    };

    window.addEventListener(`keydown`, handleKeydown);
    return () => window.removeEventListener(`keydown`, handleKeydown);
  });

  // Storing common props in the object
  const valuesToShare = {
    filteringHSbySetting,
    number,
    setting,
  };

  return (
    <div className="recordsR">
      <div className="recordsLeftR">
        {displayHS}
        <div onClick={() => handleQuit()} className="QuitR">
          Quit <span className="letterR">(Q)</span>
        </div>
      </div>
      <div className="sortingRecordsR">
        <div onClick={handleShowAll} className="showAllDivR">
          All <span className="letterR">(A)</span>
        </div>
        <RecordsOptions
          title={`Difficulty`}
          options={difficultyOptions}
          sortingOption={sorting.difficulty}
          valuesToShare={valuesToShare}
        />
        <RecordsOptions
          title={`Size`}
          options={sizeOptions}
          sortingOption={sorting.size}
          valuesToShare={valuesToShare}
        />
      </div>
      <div className="helpR">
        Navigate with mouse or keyboard (press keys in parenthesis / left and
        right arrow / enter)
      </div>
    </div>
  );
}

export default Records;
