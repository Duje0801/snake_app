import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../context/Context";
import Options from "../data/Options";
import SettingsOptions from "../components/SettingsOptions";
import SettingsKD from "../logic/keydowns/SettingsKD";
import routes from "../routes/Routes";
import "../styles/Settings.css";

function Settings() {
  // Setting temporary theme, difficulty and size, this values are not saved permanently now
  const [tempTheme, setTempTheme] = useState(``);
  const [tempDifficulty, setTempDifficulty] = useState(``);
  const [tempSize, setTempSize] = useState(``);
  const [setting, setSetting] = useState(``);
  const [number, setNumber] = useState(1);

  const { difficulty, setDifficulty, theme, setTheme, size, setSize } =
    useContext(AppContext);

  const navigate = useNavigate();

  //Loading possible themes, difficulties and sizes player can select
  const comparisionData = [tempDifficulty, tempTheme, tempSize];
  const themeOptions = Options().themeOptions;
  const difficultyOptions = Options().difficultyOptions;
  const sizeOptions = Options().sizeOptions;

  useEffect(() => {
    // Loading settings if they exist in Local storage
    const settingsMemory = JSON.parse(localStorage.getItem("settings"));
    // Setting theme, difficulty and size to show if they exist in Local storage
    setTempDifficulty(settingsMemory ? settingsMemory.difficulty : difficulty);
    setTempTheme(settingsMemory ? settingsMemory.theme : theme);
    setTempSize(settingsMemory ? settingsMemory.size : size);
  }, []);

  //Saving to Local storage after quitting settings (Quit & save button) and redirecting to Main menu or Controls
  const handleControlsQuit = (CQ) => {
    // Saving setting object to Local storage
    localStorage.setItem(
      "settings",
      JSON.stringify({
        difficulty: tempDifficulty,
        theme: tempTheme,
        size: tempSize,
      })
    );
    //Saving theme, difficulty and size permanently
    setTheme(tempTheme);
    setDifficulty(tempDifficulty);
    setSize(tempSize);
    CQ === `C` ? navigate(routes.controls) : navigate(routes.mainMenu);
  };

  // Redirecting to change username page
  const handleChangeUsername = () => {
    navigate(routes.changeUserName);
  };

  // Setting new temporary values to theme, difficulty or size
  const setTemp = (number, title) => {
    if (title === `Theme`)
      themeOptions.forEach((el, i) => {
        if (i === number) return setTempTheme(el.value);
      });
    if (title === `Difficulty`)
      difficultyOptions.forEach((el, i) => {
        if (i === number) return setTempDifficulty(el.value);
      });
    if (title === `Size`)
      sizeOptions.forEach((el, i) => {
        if (i === number) return setTempSize(el.value);
      });
  };

  // Changing the value of the setting values or navigating after pressing certain keys on the keyboard
  useEffect(() => {
    const handleKeydown = (e) => {
      SettingsKD(
        e,
        number,
        setting,
        handleControlsQuit,
        handleChangeUsername,
        setSetting,
        setNumber,
        setTemp
      );
    };

    window.addEventListener(`keydown`, handleKeydown);
    return () => window.removeEventListener(`keydown`, handleKeydown);
  });

  // Storing common props in the object
  const valuesToShare = {
    comparisionData,
    setTemp,
    setting,
    number,
  };

  return (
    <>
      <div className="divsUpS">
        <SettingsOptions
          options={themeOptions}
          title={`Theme`}
          valuesToShare={valuesToShare}
        />
        <SettingsOptions
          options={difficultyOptions}
          title={`Difficulty`}
          valuesToShare={valuesToShare}
        />
        <SettingsOptions
          options={sizeOptions}
          title={`Size`}
          valuesToShare={valuesToShare}
        />
      </div>
      <div className="btnsMidS">
        <button onClick={() => handleControlsQuit(`C`)}>
          Controls <span className="letterS">(C)</span>
        </button>
        <button onClick={() => handleChangeUsername()}>
          Change Username <span className="letterS">(U)</span>
        </button>
      </div>
      <div className="btnBottomS">
        <button onClick={() => handleControlsQuit(`Q`)}>
          Save & Quit <span className="letterS">(Q)</span>
        </button>
      </div>
      <div className="helpS">
        Navigate with mouse or keyboard (press keys in parenthesis / left and
        right arrow / enter)
      </div>
    </>
  );
}

export default Settings;
