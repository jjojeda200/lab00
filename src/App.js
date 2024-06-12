function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>¡Hola, José Juan Ojeda!</h1>
      <h2>La hora actual es: {currDate.toLocaleTimeString()}.</h2>
      <h2>La fecha actual es: {currDate.toLocaleDateString()}.</h2>
    </div>
  );
}

export default App;
