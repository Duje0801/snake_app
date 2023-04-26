function FilteringHS(HSlist, sorting) {
  let newHSlist = [...HSlist];

  // Showing only selected highscore categories
  if (sorting.difficulty !== `All`) {
    newHSlist = newHSlist.filter((el) => {
      if (sorting.difficulty === el.difficulty) return el;
    });
  }

  if (sorting.size !== `All`) {
    newHSlist = newHSlist.filter((el) => {
      if (sorting.size === el.size) return el;
    });
  }

  return newHSlist;
}

export default FilteringHS;
