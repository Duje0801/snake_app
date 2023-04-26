function Options() {
  const themeOptions = [
    { label: "Black", value: "Black" },
    { label: "White", value: "White" },
    { label: "Mobile", value: "Mobile" },
  ];

  const difficultyOptions = [
    { label: "Easy", value: "Easy" },
    { label: "Medium", value: "Medium" },
    { label: "Hard", value: "Hard" },
  ];

  const sizeOptions = [
    { label: "20x20", value: 20 },
    { label: "25x25", value: 25 },
    { label: "30x30", value: 30 },
  ];

  return { themeOptions, difficultyOptions, sizeOptions };
}

export default Options;
