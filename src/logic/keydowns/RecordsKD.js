import ChangeNumber from "../ChangeNumber";

function RecordsKD(
  e,
  number,
  setting,
  handleQuit,
  handleShowAll,
  setSetting,
  setNumber,
  filteringHSbySetting
) {
  if (
    (e.code === `KeyD` && setting === `Difficulty`) ||
    (e.code === `KeyS` && setting === `Size`)
  )
    return setSetting(``);
  if (e.code === `KeyQ`) return handleQuit();
  if (e.code === `KeyA`) return handleShowAll();
  if (e.code === `KeyD`) return setSetting(`Difficulty`);
  if (e.code === `KeyS`) return setSetting(`Size`);
  if (e.code === `ArrowUp`) return setNumber(ChangeNumber(`up`, number));
  if (e.code === `ArrowDown`) return setNumber(ChangeNumber(`down`, number));
  if (e.code === `Enter` || e.code === `NumpadEnter`) {
    filteringHSbySetting(number, setting);
  }
}

export default RecordsKD;
