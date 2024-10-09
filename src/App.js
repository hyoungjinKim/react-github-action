import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  const [disable, setDisable] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="minus-button"
          onClick={() => {
            setcount(count - 1);
          }}
          disabled={disable}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => {
            setcount(count + 1);
          }}
          disabled={disable}
        >
          +
        </button>
        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid="on/off-button"
            onClick={() => {
              setDisable((prev) => !prev);
            }}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
