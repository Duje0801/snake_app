import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../context/Context";
import routes from "../routes/Routes";
import "../styles/LogIn.css";

function LogIn() {
  const [newUserName, setNewUserName] = useState(``);
  const [isLong, setIsLong] = useState(``);

  const { userName, setUserName } = useContext(AppContext);

  const navigate = useNavigate();

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
    // Checking is password long enough
    if (newUserName.length < 3) return setIsLong(`Username is too short!`);
    //Saving password
    setUserName(newUserName);
    localStorage.setItem(`username`, JSON.stringify(newUserName));
    setNewUserName(``);
  };

  const handleChange = (e) => {
    setNewUserName(e.target.value);
  };

  // Checking if username exists and if true redirects to Main menu
  if (userName) return navigate(routes.mainMenu);
  else
    return (
      <div>
        <div className="titleL">Snake</div>
        <div className="titleHelpL">Type your username</div>
        <form onSubmit={handleSubmit} className="formL">
          <input
            onChange={handleChange}
            type="text"
            value={newUserName}
            maxLength="15"
            autoFocus
          />
          <div className="alertL">{isLong}</div>
          <button type="submit">Enter</button>
        </form>
        <div className="helpL">
          For Username confirmation use mouse (click Enter) or keyboard (key
          Enter)
        </div>
      </div>
    );
}

export default LogIn;
