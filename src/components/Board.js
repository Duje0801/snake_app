import { useEffect, useState, useContext, useRef } from "react";
import { AppContext } from "../context/Context";
import SnakeArrayUpdate from "../logic/SnakeArrayUpdate";
import CheckDirection from "../logic/CheckDirection";
import CreateFirstSnake from "../logic/CreateFirstSnake";
import FoodPositionFunction from "../logic/FoodPositionFunction";
import FoodEaten from "../logic/FoodEaten";
import GameSpeed from "../logic/GameSpeed";
import CheckHighScore from "../logic/CheckHighScore";
import BoardDirectionKD from "../logic/keydowns/BoardDirectionKD";
import BoardQuitKD from "../logic/keydowns/BoardQuitKD";
import gameStartSound from "../sounds/game-start.wav";
import scoreSound from "../sounds/score.wav";
import Grid from "./Grid";

function Board({ setOpenGOModal, setOpenQuitModal }) {
  const [foodPosition, setFoodPosition] = useState(0);

  const {
    snakeArray,
    setSnakeArray,
    score,
    difficulty,
    direction,
    setDirection,
    size,
    setScore,
    gameStop,
    setGameStop,
    highScore,
    setHighScore,
    userName,
  } = useContext(AppContext);

  const setGameSpeed = GameSpeed(difficulty, score);

  const boardG = useRef();

  useEffect(() => {
    // In case of game stopped, prevents snake update
    if (gameStop) return;

    // Creating first snake when game starts
    if (!snakeArray[0]) {
      new Audio(gameStartSound).play();
      setFoodPosition(FoodPositionFunction(snakeArray, size, true));
      setSnakeArray(CreateFirstSnake(size));
      setScore(0);
      setDirection(`ArrowRight`)
      return;
    }

    // Refreshing snake after 0.5 sec or less
    setTimeout(() => {
      const newSnakeArray = SnakeArrayUpdate(
        snakeArray,
        direction,
        score,
        size
      );

      if (newSnakeArray === `Game Over`) {
        CheckHighScore(
          score,
          difficulty,
          size,
          highScore,
          setHighScore,
          userName
        );
        setOpenGOModal(true);
        return;
      }

      setSnakeArray(newSnakeArray);
    }, setGameSpeed);

    // Checking did snake eat food (black box) and if true adding +1 to score and setting new food position
    const isFoodEaten = FoodEaten(snakeArray[0], foodPosition);
    if (isFoodEaten) {
      new Audio(scoreSound).play();
      setFoodPosition(FoodPositionFunction(snakeArray, size, false));
      setScore(score + 1);
    }
  }, [snakeArray, gameStop]);

  // Changing direction of snake pressing certain keys on the keyboard
  useEffect(() => {
    const handleKeydown = (e) => {
      // Checking if player directing snake to direction opposite of direction where snake is going
      if (!CheckDirection(e.code, direction)) return;
      // Direction is changing only press arrows, ignoring other keys
      BoardDirectionKD(e, setDirection)
    };

      window.addEventListener(`keydown`, handleKeydown);
      return () => window.removeEventListener(`keydown`, handleKeydown);  
  }, [snakeArray]);

  // Stopping game with pressing certain keys on the keyboard
  useEffect(() => {
    const handleKeydown = (e) => {
      BoardQuitKD(e, gameStop, setGameStop, setOpenQuitModal);
    };

    window.addEventListener(`keydown`, handleKeydown);
    return () => window.removeEventListener(`keydown`, handleKeydown);
  }, [gameStop]);

  return (
    <div ref={boardG} className="boardG">
      <Grid
        snakeArray={snakeArray}
        foodPosition={foodPosition}
        size={size}
        boardG={boardG}
      />
    </div>
  );
}

export default Board;
