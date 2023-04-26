import Selection from "../components/Selection";
import HelpMM from "../components/HelpMM";
import "../styles/MainMenu.css";

function MainMenu() {
  return (
    <div>
      <div className="mainMenuMM">
        <div className="titleMM">Snake</div>
        <Selection />
      </div>
      <HelpMM />
    </div>
  );
}

export default MainMenu;
