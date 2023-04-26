function FoodPositionFunction(snakeArray, size, first) {
  const randomNumber = Math.trunc(Math.random() * (size * size)) + 1;

  // Setting first food position when game starts
  if (
    //Avoding rows around snake starting position
    randomNumber < size * size - size * 6 + 1 &&
    randomNumber > size * 6 &&
    first === true
  )
    return FoodPositionFunction(snakeArray, size, true);

  // Setting 2nd and all other food positions
  if (snakeArray.includes(randomNumber))
    //Checking is new food position inside same box as snake
    return FoodPositionFunction(snakeArray, size, false);

  return randomNumber;
}

export default FoodPositionFunction;
