import ChangeNumber from "../ChangeNumber";

function SettingsKD(
  e,
  number,
  setting,
  handleControlsQuit,
  handleChangeUsername,
  setSetting,
  setNumber,
  setTemp
) {
  if (
    (e.code === `KeyT` && setting === `Theme`) ||
    (e.code === `KeyD` && setting === `Difficulty`) ||
    (e.code === `KeyS` && setting === `Size`)
  )
    return setSetting(``);
  if (e.code === `KeyC`) return handleControlsQuit(`C`);
  if (e.code === `KeyQ`) return handleControlsQuit(`Q`);
  if (e.code === `KeyU`) return handleChangeUsername();
  if (e.code === `KeyT`) return setSetting(`Theme`);
  if (e.code === `KeyD`) return setSetting(`Difficulty`);
  if (e.code === `KeyS`) return setSetting(`Size`);
  if (e.code === `ArrowUp`) return setNumber(ChangeNumber(`up`, number));
  if (e.code === `ArrowDown`) return setNumber(ChangeNumber(`down`, number));
  if (e.code === `Enter` || e.code === `NumpadEnter`)
    return setTemp(number, setting);
}

export default SettingsKD;
