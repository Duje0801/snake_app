import { useEffect, useState } from "react";

function HelpMM() {
  const [helpText, setHelpText] = useState(``);

  //Help text that appears after 1.5 seconds at the bottom of the screen in Main menu

  useEffect(() => {
    setTimeout(
      () =>
        setHelpText(`Navigate with mouse or 
            keyboard (arrows left and right / enter)`),
      1500
    );
  }, []);

  return <div className="helpMM">{helpText}</div>;
}

export default HelpMM;
