const App = ({ notes, isLoading }) => {
  return (
    <>
      {isLoading ? <p>Loading...</p> :(notes.length > 0 ? (
        notes.map((person, idx) => (
          <p key={idx}>
            {person.name} {person.number}
          </p>
        ))
      ) : (
        <p>No records to be found</p>
      ))}
    </>
  );
};

export default App;
