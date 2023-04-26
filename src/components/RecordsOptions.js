import { ImCheckmark } from "react-icons/im";

function RecordsOptions({ options, sortingOption, title, valuesToShare }) {
  const { filteringHSbySetting, number, setting } = valuesToShare;

  const useCheckmark =
    sortingOption === options[number].value ||
    sortingOption === options[number].value ? (
      <ImCheckmark />
    ) : null;

  const mappingOptions = options.map((el, i) => {
    // Option value, player is on this value (black background)
    if (title === setting && i === number)
      return (
        <div
          onClick={() => filteringHSbySetting(i, title)}
          key={i}
          style={{ backgroundColor: "black", color: "white" }}
        >
          {el.label} {useCheckmark}
        </div>
      );

    // Selected option value, player is not on this value (have checkmark and white background)
    if (el.value === sortingOption || el.value === sortingOption)
      return (
        <div onClick={() => filteringHSbySetting(i, title)} key={i}>
          {el.label} <ImCheckmark />
        </div>
      );

    return (
      <div onClick={() => filteringHSbySetting(i, title)} key={i}>
        {el.label}
      </div>
    );
  });

  return (
    <div className="selectionR">
      <div>
        {title} <span className="letterR">({title.slice(0, 1)})</span>
      </div>
      {mappingOptions}
    </div>
  );
}

export default RecordsOptions;
