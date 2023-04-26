function ChangeNumber(direction, number) {
  let newNumber = 0;

  if (direction === "up" && number > 0) newNumber = number - 1;
  if (direction === "up" && number === 0) newNumber = 2;
  if (direction === "down" && number < 2) newNumber = number + 1;

  return newNumber;
}

export default ChangeNumber;
