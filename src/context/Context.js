import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppContexProvider(Component) {
  return function Context(props) {
    const [snakeArray, setSnakeArray] = useState([]);
    const [userName, setUserName] = useState(``);
    const [direction, setDirection] = useState(`ArrowRight`);
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState(`Medium`);
    const [theme, setTheme] = useState(`White`);
    const [size, setSize] = useState(25);
    const [gameStop, setGameStop] = useState(false);
    const [highScore, setHighScore] = useState([]);
    const [firstHighScore, setFirstHighScore] = useState(0);

    useEffect(() => {
      const checkSettings = JSON.parse(localStorage.getItem(`settings`));
      if (checkSettings) {
        setDifficulty(checkSettings.difficulty);
        setSize(checkSettings.size);
        setTheme(checkSettings.theme);
      }
      const checkHighScores = JSON.parse(localStorage.getItem(`records`));
      if (checkHighScores) {
        const firstHS = [...checkHighScores].sort((a, b) => {
          if (a.score < b.score) return 1;
          if (a.score > b.score) return -1;
        });
        setHighScore([...checkHighScores]);
        setFirstHighScore(firstHS[0].score);
      }
      const checkUserName = JSON.parse(localStorage.getItem(`username`));
      if (checkUserName) setUserName(checkUserName);
    }, []);

    const valuesToShare = {
      snakeArray,
      setSnakeArray,
      userName,
      setUserName,
      direction,
      setDirection,
      score,
      setScore,
      difficulty,
      setDifficulty,
      theme,
      setTheme,
      size,
      setSize,
      gameStop,
      setGameStop,
      highScore,
      setHighScore,
      firstHighScore,
      setFirstHighScore,
    };

    return (
      <AppContext.Provider value={valuesToShare}>
        <Component {...props} />
      </AppContext.Provider>
    );
  };
}
