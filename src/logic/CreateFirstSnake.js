function CreateFirstSnake(size) {
  const firstSnakeArray = [];
  for (let i = 5; i > 0; i--) {
    firstSnakeArray.push(Math.trunc(size / 2) * size + 5 + i);
  }

  return firstSnakeArray;
}

export default CreateFirstSnake;
