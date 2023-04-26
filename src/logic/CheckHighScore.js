import { v4 as uuidv4 } from "uuid";

function CheckHighScore(
  score,
  difficulty,
  size,
  highScore,
  setHighScore,
  userName
) {
  // High score is saving only if it is in top 10 in their category (difficulty and size)
  // Every category have three options (difficulty: easy, medium and hard; size: 20, 25, 30),
  // maximum number of saved highscores is 60

  if (score === 0) return;

  const newScore = { score, difficulty, size, userName, id: uuidv4() };

  const checkHighScore = [...highScore, newScore];

  // Checking is new score in top 10 in category
  const checkTop10 = checkHighScore
    .filter((el) => {
      if (el.difficulty === difficulty && el.size === size) return el;
    })
    .sort((a, b) => {
      if (a.score < b.score) return 1;
      if (a.score > b.score) return -1;
    })
    .slice(0, 10);

  // If new score is in top 10 in category, save highscore
  const cleanOldTop10 = checkHighScore.filter((el) => {
    if (el.difficulty !== difficulty || el.size !== size) return el;
  });

  const newHighScoreList = [...checkTop10, ...cleanOldTop10];

  setHighScore(newHighScoreList);

  // Saving new highscore object to Local Storage
  localStorage.setItem("records", JSON.stringify(newHighScoreList));
}

export default CheckHighScore;
