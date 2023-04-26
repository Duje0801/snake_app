import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../context/Context";
import routes from "../routes/Routes";

function ChangeUsername() {
  const [state, setState] = useState(``);
  const [isLong, setIsLong] = useState(``);

  const { userName, setUserName } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    //To avoid first leter "u" in input
    setTimeout(() => setState(``), 0);
  }, []);

  // Confirmation after pressing Enter key
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === `Enter` || e.code === `NumpadEnter`)
        return handleSubmit(e);
    };

    window.addEventListener(`keydown`, handleKeydown);
    return () => window.removeEventListener(`keydown`, handleKeydown);
  });

  // Confirmation after clicking Enter button and saving to Local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.length < 3) return setIsLong(`Username is too short!`);
    setUserName(state);
    localStorage.setItem("username", JSON.stringify(state));
    navigate(routes.settings);
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div>
      <div className="CUtitleS">Type your new username</div>
      <form onSubmit={handleSubmit} className="CUformS">
        <input
          onChange={handleChange}
          type="text"
          value={state}
          maxLength="15"
          placeholder={userName}
          autoFocus
        ></input>
        <div className="CUalertS">{isLong}</div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default ChangeUsername;
