function BoardQuitKD(e, gameStop, setGameStop, setOpenQuitModal) {
  if (e.code === "KeyQ" || e.code === `Escape`) {
    setGameStop(true);
    setOpenQuitModal(true);
    return;
  }
  if (e.code === "KeyS") !gameStop ? setGameStop(true) : setGameStop(false);
}

export default BoardQuitKD;
