function GameOverModalKD(e, number, handleOptions, handleChangeRoute) {
  if (e.code === "ArrowLeft" || e.code === "ArrowRight") handleOptions();
  if (e.code === "Enter" || e.code === "NumpadEnter") handleChangeRoute(number);
}

export default GameOverModalKD;
