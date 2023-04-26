function MappingGOModalOptions(options, number, handleChangeRoute) {
  return options.map((option, i) => {
    if (i === number)
      return (
        <div
          onClick={() => handleChangeRoute(number)}
          key={i}
          className="selectionOptionG"
        >
          {option}
        </div>
      );
  });
}

export default MappingGOModalOptions;
