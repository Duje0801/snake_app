import { ImCheckmark } from "react-icons/im";

function SettingsOptions({ options, title, valuesToShare }) {
  // Extracting common props
  const { comparisionData, setTemp, setting, number } = valuesToShare;

  const mappedSettings = options.map((option, i) => {
    // Option value, player is on this value (black background)
    if (title === setting && i === number)
      return (
        <div
          className="selectionOptionS"
          style={{ backgroundColor: "black", color: "white" }}
          key={i}
          onClick={() => setTemp(i, title)}
        >
          {option.label}{" "}
          {comparisionData.includes(option.value) ? <ImCheckmark /> : null}
        </div>
      );

    // Selected option value, player is not on (have checkmark and white background)
    if (comparisionData.includes(option.value))
      return (
        <div
          className="selectionOptionS"
          key={i}
          onClick={() => setTemp(i, title)}
        >
          {option.label} <ImCheckmark />
        </div>
      );

    // Values player is not on and are not chosen (don't have checkmark and white background)
    return (
      <div
        className="selectionOptionS"
        key={i}
        onClick={() => setTemp(i, title)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="selectionColumnS">
      <div className="selectionTitleS">
        {title} <span className="letterS">({title.slice(0, 1)})</span>
      </div>
      <div>{mappedSettings}</div>
    </div>
  );
}

export default SettingsOptions;
