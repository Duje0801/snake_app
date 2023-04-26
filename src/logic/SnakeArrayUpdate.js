function SnakeArrayUpdate(snakeArray, direction, score, size) {
  let newSnakeArray = [];

  // New snake box newSnakeArray[0] depends on direction
  newSnakeArray[0] = snakeArray[0] + 1;
  if (direction === `ArrowLeft`) newSnakeArray[0] = snakeArray[0] - 1;
  if (direction === `ArrowUp`) newSnakeArray[0] = snakeArray[0] - size;
  if (direction === `ArrowDown`) newSnakeArray[0] = snakeArray[0] + size;

  for (let i = 1; i < score + 5; i++) {
    newSnakeArray.push(snakeArray[i - 1]);
  }

  // Giving a new box when the snake goes outside of the board
  if (newSnakeArray[0] % size === 1 && newSnakeArray[1] % size === 0)
    newSnakeArray[0] = snakeArray[0] - size + 1;
  if (newSnakeArray[0] % size === 0 && newSnakeArray[1] % size === 1)
    newSnakeArray[0] = snakeArray[0] + size - 1;
  if (newSnakeArray[0] < 1)
    newSnakeArray[0] = snakeArray[0] + size * size - size;
  if (newSnakeArray[0] > size * size)
    newSnakeArray[0] = snakeArray[0] - size * size + size;

  if (snakeArray.includes(newSnakeArray[0])) return `Game Over`;

  return newSnakeArray;
}

export default SnakeArrayUpdate;
