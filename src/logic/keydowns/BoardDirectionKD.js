function BoardDirectionKD(e, setDirection) {
  if (
    e.code === `ArrowUp` ||
    e.code === `ArrowDown` ||
    e.code === `ArrowLeft` ||
    e.code === `ArrowRight`
  )
    setDirection(e.code);
}

export default BoardDirectionKD;
