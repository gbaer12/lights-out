import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";

/** Simple app that just shows the Lights Out game */

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Lights Out!</h1>
      <Board />
    </div>
  );
}

export default App;
