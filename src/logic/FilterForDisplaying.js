function FilterForDisplaying(filteredHS) {
  const mappedHS = filteredHS
    .sort((a, b) => {
      if (a.score < b.score) return 1;
      if (a.score > b.score) return -1;
    })
    .slice(0, 10)
    .map((el, i) => {
      return (
        <tr className="tableBodyR" key={el.id}>
          <td>{i + 1}</td>
          <td className="usernameR">{el.userName}</td>
          <td>{el.score}</td>
          <td>{el.difficulty}</td>
          <td>{el.size}</td>
        </tr>
      );
    });

  return filteredHS.length === 0 ? (
    <div className="noRecordsR">There Are No Records </div>
  ) : (
    <table className="tableR">
      <caption className="tableTitleR">Records</caption>
      <thead>
        <tr className="tableHeaderR">
          <th>No</th>
          <th>Name</th>
          <th>Score</th>
          <th>Difficulty</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>{mappedHS}</tbody>
    </table>
  );
}

export default FilterForDisplaying;
