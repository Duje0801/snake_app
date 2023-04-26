import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import routes from "../routes/Routes";

function Selection() {
  const [number, setNumber] = useState(0);

  const navigate = useNavigate();

  // Options player can select in Main menu
  const options = [`New Game`, `Records`, `Settings`];

  // Redirect after selecting one of the options in Main menu
  const handleChangeRoute = (number) => {
    if (number === 0) return navigate(routes.game);
    if (number === 1) return navigate(routes.records);
    if (number === 2) return navigate(routes.settings);
  };

  // Change option in Main menu, to left or right
  const handleOptions = (side) => {
    if (side === `L` && number > 0) return setNumber(number - 1);
    if (side === `L` && number === 0) return setNumber(2);
    if (side === `R` && number < 2) return setNumber(number + 1);
    if (side === `R` && number === 2) return setNumber(0);
  };

  // Mapping three options
  const mappedOptions = options.map((option, i) => {
    if (i === number)
      return (
        <div onClick={() => handleChangeRoute(i)} key={i} className="optionMM">
          {option}
        </div>
      );
  });

  // Change option after pressing left or right on the keyboard and chosing one after pressing Enter key
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === `ArrowLeft`) return handleOptions(`L`);
      if (e.code === `ArrowRight`) return handleOptions(`R`);
      if (e.code === `Enter` || e.code === `NumpadEnter`)
        handleChangeRoute(number);
    };

    window.addEventListener(`keydown`, handleKeydown);
    return () => window.removeEventListener(`keydown`, handleKeydown);
  }, [number]);

  return (
    <div className="selectionMM">
      <GoArrowLeft onClick={() => handleOptions(`L`)} className="arrowMM" />
      {mappedOptions}
      <GoArrowRight onClick={() => handleOptions(`R`)} className="arrowMM" />
    </div>
  );
}

export default Selection;
