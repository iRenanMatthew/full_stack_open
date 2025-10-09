const App = ({ getFilterSearch, filter }) => {
  return (
    <>
      <label>Filter shown with: </label>
      <input
        type="text"
        onChange={getFilterSearch}
        value={filter}
      />
    </>
  );
};

export default App;
