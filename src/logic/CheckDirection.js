function CheckDirection(eCode, direction) {
  let boole = true;

  if (eCode === `ArrowUp` && direction === `ArrowDown`) boole = false;
  if (eCode === `ArrowRight` && direction === `ArrowLeft`) boole = false;
  if (eCode === `ArrowLeft` && direction === `ArrowRight`) boole = false;
  if (eCode === `ArrowDown` && direction === `ArrowUp`) boole = false;

  return boole;
}

export default CheckDirection;
