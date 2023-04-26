function GameSpeed(difficulty, score) {
  let timeDecrease = 25;
  if (difficulty === `Easy`) timeDecrease = 20;
  if (difficulty === `Hard`) timeDecrease = 30;

  const timer = 500 - score * timeDecrease;

  if (timer < 100 && difficulty === `Hard`) return 70;
  if (timer < 100 && difficulty === `Medium`) return 75;
  if (timer < 100) return 80;
  return timer;
}

export default GameSpeed;
