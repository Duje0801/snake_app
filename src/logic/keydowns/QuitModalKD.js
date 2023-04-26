function QuitModalKD(e, handleYes, handleNo) {
  if (e.code === "KeyZ") handleYes();
  if (e.code === "KeyN") handleNo();
}

export default QuitModalKD;
